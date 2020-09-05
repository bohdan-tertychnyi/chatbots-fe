import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message }) => (
  <div className="chat-message">
    <div className="chat-message-foto">
      <img src="" alt="" />
    </div>
    <div className="chat-message-text">
      {message}
    </div>
    <div className="chat-message-time">2 hours ago</div>
  </div>
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
