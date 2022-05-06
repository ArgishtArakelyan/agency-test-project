import React from 'react';
import { ContactBlock, ImageBlock, NavigationBlock, MenuBtn } from '../../molecules/Navigation';
import './style.scss';

const Navigation = () => (
  <header>
    <div className="innerWrap">
      <ImageBlock />
      <NavigationBlock />
      <ContactBlock />
      <MenuBtn />
    </div>
  </header>
);

export default Navigation;
