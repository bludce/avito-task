import React from 'react';

import './Header.sass';

import Logo from '../Logo/Logo'
import Input from '../Input/Input'

const Header = () => (
  <header className="header">
    <Logo />
    <div className="search">
      <Input />
    </div>
  </header>
);

export default Header;