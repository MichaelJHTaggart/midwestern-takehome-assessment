import React from 'react';
import styles from '../styles/HeadingOne.module.scss';

export const HeadingOne: React.FC = ({children}) => {
  return (
    <div className={styles.HeadingOne}>
      <h1>Heading One</h1>
      <span></span>
      <p>
        {children}
      </p>
    </div>
  );
};
