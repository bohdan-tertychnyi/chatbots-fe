import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import ContactUser from './ContactUser';

const BotsMenu = ({ bots, activeTab, setActiveTab }) => {
  const handleItemClick = useCallback((item) => {
    setActiveTab(item);
  }, [setActiveTab]);

  return (
    <div className="contacts-wrap">
      <div className="contact">
        {bots.map(({ name, icon }) => (
          <ContactUser
            key={name}
            name={name}
            isActive={name === activeTab}
            imgSrc={icon}
            onClick={() => handleItemClick(name)}
          />
        ))}
      </div>
    </div>
  );
};

BotsMenu.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  bots: PropTypes.arrayOf(PropTypes.object).isRequired, // TODO: fix with TS?
};

export default BotsMenu;
