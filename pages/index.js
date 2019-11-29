import React, { Component } from "react";
import uuid from "uuid";

// import { getChannels } from "../actions/podcastActions";

import Layout from "../components/layout/layout";
import ChannelCard from "../components/cards/channelCard";

class Home extends Component {
  static getInitialProps = ({ req }) => {
    console.log(req);
    // const channels = await getChannels();
    return {
      channels: []
    };
  };

  getChannelsContent = () => {
    return this.props.channels.map(channel => (
      <div className="col s12 m6 l4" key={uuid()}>
        <ChannelCard channel={channel} />
      </div>
    ));
  };

  render() {
    return (
      <Layout>
        <div className="row">
          <h4>Channels</h4>
          {this.getChannelsContent()}
        </div>
      </Layout>
    );
  }
}

export default Home;
