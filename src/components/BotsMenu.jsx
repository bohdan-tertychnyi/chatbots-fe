import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import ContactUser from './ContactUser';
import { BOTNAME_LIST } from '../bots';

const BotsMenu = ({ activeTab, setActiveTab }) => {
  const handleItemClick = useCallback((item) => {
    setActiveTab(item);
  }, [setActiveTab]);

  return (
    <div className="contacts-wrap">
      <div className="contact">
        {BOTNAME_LIST.map((item) => (
          <ContactUser
            key={item}
            name={item}
            isActive={item === activeTab}
            onClick={() => handleItemClick(item)}
          />
        ))}
      </div>
    </div>
  );
};

BotsMenu.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default BotsMenu;
