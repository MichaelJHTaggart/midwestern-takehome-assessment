import React from 'react';
import styles from '../styles/HeadingOne.module.scss';

export const HeadingOne: React.FC = () => {
  return (
    <div className={styles.HeadingOne}>
      <h1>Heading One</h1>
      <span></span>
      <p>
        Remove the duplicates in 2 Javascript arrays (found in readme), add the
        results to an array and output the list of distinct names in an
        unordered list below this paragraph when this link is clicked. If the
        operation has been completed already, notify the user that this has
        already been done.
      </p>
    </div>
  );
};
