import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import { ThemeContext } from '../../contexts/ThemeContext';

const darkstyle = {
  background: '#000',
  color: '#FFF',
}

const lightstyle = {
  background: '#FFF',
  color: '#000',
}

function Button({
  children,
  onClick
}) {

  const {theme} = useContext(ThemeContext);

  return (
    <button
      onClick={onClick}
      style={theme === 'DARK' ? darkstyle : lightstyle}
    >{children}</button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button;