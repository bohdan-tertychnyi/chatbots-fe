import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

const Message = ({ message, isFromUser, createTime }) => {
  const secondsAgo = Math.round((Date.now() - createTime) / 1000);
  const timeAgo = useMemo(() => {
    if (secondsAgo < 5) return 'Now';
    if (secondsAgo >= 60) return `${Math.round(secondsAgo / 60)} minutes ago`;
    return `${secondsAgo} seconds ago`;
  }, [secondsAgo]);

  return (
    <div className={`chat-message ${isFromUser ? 'user-message' : ''}`}>
      <div className="chat-message-foto">
        <img src="" alt="" />
      </div>
      <div className="chat-message-text">
        {message}
      </div>
      <div className="chat-message-time">
        {timeAgo}
      </div>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
  isFromUser: PropTypes.bool.isRequired,
  createTime: PropTypes.number.isRequired,
};

export default Message;
