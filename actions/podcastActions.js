import axios from "axios";

export const getChannels = async () => {
  try {
    const axiosResponse = await axios.get(
      "https://api.audioboom.com/channels/recommended"
    );
    return axiosResponse.data.body;
  } catch (err) {
    return [];
  }
};

export const getChannel = async id => {
  try {
    const axiosResponse = await axios.get(
      `https://api.audioboom.com/channels/${id}`
    );
    return axiosResponse.data.body.channel;
  } catch (err) {
    return {};
  }
};

export const getChannelAudioClips = async id => {
  try {
    const axiosResponse = await axios.get(
      `https://api.audioboom.com/channels/${id}/audio_clips`
    );
    return axiosResponse.data.body.audio_clips;
  } catch (err) {
    return [];
  }
};

export const getChildChannels = async channel_id => {
  try {
    const axiosResponse = await axios.get(
      `https://api.audioboom.com/channels/${channel_id}/child_channels`
    );
    return axiosResponse.data.body.channels;
  } catch (err) {
    return [];
  }
};
