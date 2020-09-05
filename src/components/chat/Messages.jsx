import React from 'react';
import Message from './Message';

const Messages = () => (
  <div style={{ position: 'relative' }}>
    <div className="chat">
      <Message message="iqiqiqiq" />
      {/* <div className="chat-message user-message">
        <div className="chat-message-foto">
          <img src="" alt="" />
        </div>
        <div className="chat-message-text">
          You are so stupid...
        </div>
        <div className="chat-message-time">2 hours ago</div>
      </div>
      <div className="chat-message">
        <div className="chat-message-foto">
          <img src="" alt="" />
        </div>
        <div className="chat-message-text">
          London is the capital of great britain.
        </div>
        <div className="chat-message-time">2 hours ago</div>
      </div>
      <div className="chat-message user-message">
        <div className="chat-message-foto">
          <img src="" alt="" />
        </div>
        <div className="chat-message-text">
          Hello, bot
        </div>
        <div className="chat-message-time">2 hours ago</div>
      </div> */}
    </div>
  </div>
);

export default Messages;
