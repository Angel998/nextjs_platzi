const express = require("express");
const next = require("next");
const axios = require("axios");
const cookieParser = require("cookie-parser");
const session = require("express-session");

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
    console.log("getChannels\n", err);
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

function getExpirationDate() {
  const currentDate = new Date();
  currentDate.setSeconds(currentDate.getSeconds() + 60);
  return currentDate.getTime();
}

app.prepare().then(() => {
  const server = express();
  server.use(cookieParser());
  server.use(
    session({
      secret: "MAL9ja78jnsa8193jndlka0812dhasu"
    })
  );

  server.use((req, res, next) => {
    if (req.session.serverSession) {
      const currentTime = new Date().getTime();
      if (req.session.serverSession.expires < currentTime) {
        console.log("Sesion expiro, renovando");
        req.session.serverSession.expires = getExpirationDate();
      }
    } else {
      req.session.serverSession = {
        user: {
          nombre: "Angel",
          id: 1
        },
        expires: getExpirationDate()
      };
    }
    next();
  });

  server.get("/", async (req, res) => {
    const channels = await getChannels();
    req.serverData = {
      channels
    };
    return app.render(req, res, "/index", req.query);
  });

  server.get("/canal/:id", async (req, res) => {
    const id = req.params.id;
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
