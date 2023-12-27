import React from 'react';
import classes from './Button.module.css';

const Button = ({ text }) => (
  <button className={classes.button}>{text}</button>
);

export default Button;
