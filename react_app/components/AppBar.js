import React from 'react';
import { AppBar } from 'react-toolbox/lib/app_bar';
import styles from '../../styles/components/AppBar.css';

const MyAppBar = () => (
  <AppBar className={styles.bar} title="This is the App Bar" />
);

export default MyAppBar;
