import React from 'react';
import './button.scss';

const Button = (props) => {
  
  return <span onClick={props.click} className="btn">Click</span>
}
export default Button;