import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import './Header.sass';

import Logo from '../Logo/Logo'
import Input from '../Input/Input'

const Header = ({onChange, onKeyPress, value}) => (
  <header className="header">
    <Logo />
    <div className="search">
      <Input 
        onChange={onChange}
        onKeyPress={onKeyPress}
        value={value}
      />
      <Link to="/" className="header__link">Главная</Link>
    </div>
  </header>
);

Header.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  value: PropTypes.string
}

Header.defaultProps = {
  onChange: () => {},
  onKeyPress: () => {},
  value: '',
}

export default Header;