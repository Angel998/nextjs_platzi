import React, { Component } from "react";

import Layout from "../components/layout/layout";
// import {
//   getChannel,
//   getChannelAudioClips,
//   getChildChannels
// } from "../actions/podcastActions";

class Canal extends Component {
  static getInitialProps = props => {
    // const { id } = query;
    // const [channel, audios, child_channels] = await Promise.all([
    //   getChannel(id),
    //   getChannelAudioClips(id),
    //   getChildChannels(id)
    // ]);
    return {
      channel: [],
      audios: [],
      child_channels: []
    };
  };

  getChannelContent = () => {
    const { channel, audios, child_channels } = this.props;
    return (
      <div className="card">
        <div className="card-content">
          <h5>{channel.title}</h5>
          <p>Total Audios: {audios.length}</p>
          <p>Series: {child_channels.length}</p>
        </div>
      </div>
    );
  };

  render() {
    return (
      <Layout>
        <div className="row">
          <div className="col s12">{this.getChannelContent()}</div>
        </div>
      </Layout>
    );
  }
}

export default Canal;
