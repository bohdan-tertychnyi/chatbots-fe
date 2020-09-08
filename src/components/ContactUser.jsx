// eslint-disable-jsx-a11y/anchor-is-valid
import React from 'react';
import PropTypes from 'prop-types';

const ContactUser = ({
  name, isActive, onClick, imgSrc,
}) => (
  <div className={`contact-user ${isActive ? 'active' : ''}`} onClick={onClick}>
    <div className="contact-user-foto">
      <a label="user-foto"><img src={imgSrc} alt="" /></a>
    </div>
    <div className="contact-user-info">
      <div className="contact-user-top">
        <a href="#" className={`contact-user-name ${isActive ? 'active' : ''}`}>
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
  imgSrc: PropTypes.string.isRequired,
};

export default ContactUser;
