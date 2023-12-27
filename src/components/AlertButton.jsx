import React from 'react';
import styles from './AlertButton.module.css';

const AlertButton = ({ text }) => (
  <button className={styles.button}>{text}</button>
);

export default AlertButton;
