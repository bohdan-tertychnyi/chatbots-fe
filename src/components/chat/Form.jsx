import React, { useCallback, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { requestBot } from '../../bots';

const ENTER_KEY = 'Enter';

const Form = ({ addMessage, botId }) => {
  const [message, setMessage] = useState('');

  const textarea = useRef(null);

  const handleKeyDown = useCallback((e) => {
    if (e.key === ENTER_KEY) {
      e.preventDefault();

      if (message) {
        requestBot({ botId, message });

        addMessage({ message: { value: message, createTime: Date.now(), author: 'user' } });

        setMessage('');
      }
    }
  }, [setMessage, message, addMessage, botId]);

  return (
    <div className="chat-form">
      <form style={{ height: '100%' }}>
        <div className="textarea-wrap" style={{ height: '80%' }}>
          <textarea
            placeholder="Text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            ref={textarea}
            onKeyDown={handleKeyDown}
            style={{ height: '100%' }}
          />
        </div>
        <div className="textarea-count-wrap" style={{ height: '20%' }}>
          <div className="checkbox-wrap">
            Press Enter to send
          </div>
        </div>
      </form>
    </div>
  );
};

Form.propTypes = {
  addMessage: PropTypes.func.isRequired,
  botId: PropTypes.string.isRequired,
};

export default Form;
