import React from 'react';
import styles from '../styles/HeroImage.module.scss';
import Image from 'next/image';
import { Hero } from '@prisma/client';
interface Props {
  children: Hero[]
}

export const HeroImage: React.FC<Props> = ({children}) => {
  
  return (
    <div className={styles.HeroImage}>
      {children?.map((info) => (
        <div key={info.id} className={styles.HeroCard}>
          <div className={styles.Image}>
            <Image
              src={info.image}
              height={info.height}
              width={info.width}
              alt="Talkie"
            />
          </div>
          <div>
            <h2>{info.title}</h2>
            <p>{info.text}</p>
          </div>
          <button>{info.buttonText}</button>
        </div>
      ))}
    </div>
  );
};
