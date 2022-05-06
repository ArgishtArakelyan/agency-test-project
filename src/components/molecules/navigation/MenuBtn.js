import React from 'react';
import Icon from '../../../assets/images/Combined-Shape1.png';
import { Image, Button } from '../../atoms';

const MenuBtn = () => (
  <Button className="menu-toggle-btn">
    <Image src={Icon} />
  </Button>
);

export default MenuBtn;
