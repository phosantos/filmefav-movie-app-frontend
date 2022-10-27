import React from 'react';
import styles from './Loading.module.css';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.container}>
        <Logo />
      </div>
    </div>
  );
};

export default Loading;
