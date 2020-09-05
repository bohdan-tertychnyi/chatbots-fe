import React, { useCallback, useState, useRef } from 'react';

const ENTER_KEY = 'Enter';

const Form = () => {
  const [message, setMessage] = useState('');
  const textarea = useRef(null);
  const handleKeyDown = useCallback((e) => {
    if (e.key === ENTER_KEY) {
      e.preventDefault();
      setMessage('');
    }
  }, [setMessage]);

  return (
    <div className="chat-form">
      <form>
        <div className="textarea-wrap">
          <textarea
            placeholder="Text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            ref={textarea}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="textarea-count-wrap">
          <div className="checkbox-wrap">
            Press Enter to send
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
