import React, { Component } from 'react';
import Websocket from 'react-websocket';


class WebSocketService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      machine: null,
      data: null,
      timestamp:null,
    };
  }

  handleData(data) {
    const result = JSON.parse(data);
    this.setState({ count: this.state.count + result.movement });
  }

  render() {
    return (
      <div>
          Count:
        {' '}
        <strong>
          {this.state.count}
        </strong>

        <Websocket
          url="ws://127.0.0.1:8096"
          onMessage={this.handleData.bind(this)}
        />
      </div>
    );
  }
}

export default WebSocketService;
