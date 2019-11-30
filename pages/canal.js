import React, { Component } from "react";

import Layout from "../components/layout/layout";

class Canal extends Component {
  static getInitialProps = props => {
    const { channel, audios, child_channels } = props.req.serverData;
    return {
      channel,
      audios,
      child_channels
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
