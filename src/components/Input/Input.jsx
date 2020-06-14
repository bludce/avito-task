import React from 'react';
import PropTypes from 'prop-types';

import './Input.sass';

const Input = ({onChange, onKeyPress, value}) => {
  return (
    <input 
      type="text" 
      className="input" 
      onChange={onChange}
      onKeyPress={onKeyPress}
      value={value}
    />   
  )
};

Input.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
}

Input.defaultProps = {
  onChange: () => {},
  onKeyPress: () => {},
}

export default Input;