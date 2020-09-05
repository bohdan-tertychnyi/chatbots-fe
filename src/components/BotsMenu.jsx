import React, { useState, useCallback } from 'react';
import ContactUser from './ContactUser';

const BOTNAME_LIST = ['john_snow', 'martin', 'sherlock', 'monica', 'dallas'];

const BotsMenu = () => {
  const [activeItem, setActiveItem] = useState(0);
  const handleItemClick = useCallback((index) => {
    setActiveItem(index);
  }, []);

  return (
    <div className="contacts-wrap">
      <div className="contact">
        {BOTNAME_LIST.map((item, index) => (
          <ContactUser
            key={item}
            name={item}
            isActive={index === activeItem}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default BotsMenu;
