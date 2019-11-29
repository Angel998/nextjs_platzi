const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const getChannels = async () => {
  try {
    const axiosResponse = await axios.get(
      "https://api.audioboom.com/channels/recommended"
    );
    return axiosResponse.data.body;
  } catch (err) {
    return [];
  }
};

const getChannel = async id => {
  try {
    const axiosResponse = await axios.get(
      `https://api.audioboom.com/channels/${id}`
    );
    return axiosResponse.data.body.channel;
  } catch (err) {
    return {};
  }
};

const getChannelAudioClips = async id => {
  try {
    const axiosResponse = await axios.get(
      `https://api.audioboom.com/channels/${id}/audio_clips`
    );
    return axiosResponse.data.body.audio_clips;
  } catch (err) {
    return [];
  }
};

const getChildChannels = async channel_id => {
  try {
    const axiosResponse = await axios.get(
      `https://api.audioboom.com/channels/${channel_id}/child_channels`
    );
    return axiosResponse.data.body.channels;
  } catch (err) {
    return [];
  }
};

app.prepare().then(() => {
  const server = express();

  server.get("/", async (req, res) => {
    const channels = await getChannels();
    req.serverData = {
      channels
    };
    return app.render(req, res, "/index", req.query);
  });

  server.get("/canal/:id", async (req, res) => {
    const [channel, audios, child_channels] = await Promise.all([
      getChannel(id),
      getChannelAudioClips(id),
      getChildChannels(id)
    ]);
    req.serverData = {
      channel,
      audios,
      child_channels
    };
    return app.render(req, res, "/canal", req.query);
  });

  server.all("*", (req, res) => {
    return app.render(req, res, "/notfound");
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
