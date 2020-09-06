import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import ContactUser from './ContactUser';
import { BOTNAME_LIST } from '../bots';

const BotsMenu = ({ activeTab, setActiveTab }) => {
  const handleItemClick = useCallback((index) => {
    setActiveTab(index);
  }, [setActiveTab]);

  return (
    <div className="contacts-wrap">
      <div className="contact">
        {BOTNAME_LIST.map((item, index) => (
          <ContactUser
            key={item}
            name={item}
            isActive={index === activeTab}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

BotsMenu.propTypes = {
  activeTab: PropTypes.number.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default BotsMenu;
