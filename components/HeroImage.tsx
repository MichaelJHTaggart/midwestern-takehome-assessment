import React from 'react';
import styles from '../styles/HeroImage.module.scss';
import Image from 'next/image';

export const HeroImage: React.FC = () => {
  let data = [
    {
      id: 1,
      image: '/images/talkie.svg',
      height: 106,
      width: 51,
      title: 'Heading Two',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      buttonText: 'Learn More',
    },
    {
      id: 2,
      image: '/images/rabbit.svg',
      height: 97,
      width: 622,
      title: 'Heading Two',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      buttonText: 'Learn More',
    },
    {
      id: 3,
      image: '/images/coin.svg',
      height: 98,
      width: 98,
      title: 'Heading Two',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      buttonText: 'Learn More',
    },
  ];
  return (
    <div className={styles.HeroImage}>
      {data.map((info) => (
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
