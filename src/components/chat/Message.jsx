import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import config from '../../config';

const { userIconSrc } = config;

const MILISEC_IN_SECOND = 1000;
const SECONDS_IN_MINUTE = 60;
const SECONDS_THRESHOLD = 5;

const Message = ({
  message, isFromUser, createTime, imgSrc,
}) => {
  const secondsAgo = Math.round((Date.now() - createTime) / MILISEC_IN_SECOND);

  const timeAgo = useMemo(() => {
    if (secondsAgo < SECONDS_THRESHOLD) return 'Now';
    if (secondsAgo >= SECONDS_IN_MINUTE) return `${Math.round(secondsAgo / SECONDS_IN_MINUTE)} minutes ago`;
    return `${secondsAgo} seconds ago`;
  }, [secondsAgo]);

  const src = isFromUser ? userIconSrc : imgSrc;
  const alt = isFromUser ? 'user-icon' : 'bot-icon';

  return (
    <div className={`chat-message ${isFromUser ? 'user-message' : ''}`}>
      <div className="chat-message-foto">
        <img src={src} alt={alt} />
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
  imgSrc: PropTypes.string.isRequired,
};

export default Message;
