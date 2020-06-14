import React from 'react';
import PropTypes from 'prop-types';

import './Header.sass';

import Logo from '../Logo/Logo'
import Input from '../Input/Input'

const Header = ({onChange, onKeyPress}) => (
  <header className="header">
    <Logo />
    <div className="search">
      <Input 
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </div>
  </header>
);

Header.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
}

Header.defaultProps = {
  onChange: () => {},
  onKeyPress: () => {},
}

export default Header;