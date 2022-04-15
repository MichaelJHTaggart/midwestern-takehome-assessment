import React from 'react';
import styles from '../styles/HeadingOne.module.scss';

interface Props {
  isContact: boolean;
  title: String;
}

export const HeadingOne: React.FC<Props> = ({ children, isContact, title }) => {
  return (
    <>
      {!isContact && (
        <div className={styles.HeadingOne}>
          <h1>{title}</h1>
          <span></span>
          <p>{children}</p>
        </div>
      )}
      {isContact && (
        <div className={styles.HeadingOneForm}>
          <h1>Heading One</h1>
          <span></span>
          <p>{children}</p>
        </div>
      )}
    </>
  );
};
