import React from 'react';
import PropTypes from 'prop-types';

const ContactUser = ({ name, isActive, onClick }) => (
  <div className={`contact-user ${isActive ? 'active' : ''}`} onClick={onClick}>
    <div className="contact-user-foto">
      <a href="/" label="user-foto"><img src="" alt="" /></a>
    </div>
    <div className="contact-user-info">
      <div className="contact-user-top">
        <a href="/" className="contact-user-name">
          {name}
        </a>
      </div>
    </div>
  </div>
);

ContactUser.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactUser;
