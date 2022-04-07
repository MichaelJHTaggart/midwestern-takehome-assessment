import React from 'react';
import Image from 'next/image';
import Logo from '../public/images/logo.svg';
import styles from '../styles/NavBar.module.scss';

interface Props {
  setIsContact: (boolean: boolean) => void;
  isContact: boolean;
}

export const NavBar: React.FC<Props> = ({ setIsContact, isContact }) => {
  return (
    <div className={styles.NavBar}>
      <div className={styles.Logo}>
        <Image src={Logo} height={47} width={225} alt="Logo" />
      </div>
      <p
        className={styles.Contact}
        onClick={() => {
          setIsContact(true);
        }}
      >
        contact
      </p>
    </div>
  );
};
