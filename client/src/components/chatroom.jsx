import React, { Component } from 'react';
import '../App.css';
import io from 'socket.io-client';

class Chatroom extends Component {
  render() {
    return (
      <div>
      <ul id="messages"></ul>
    <form action="">
      <input id="m" autoComplete="off" /><button>Send</button>
    </form>
      </div>

      )
  }
}

export default Chatroom;
