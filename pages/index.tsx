import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { HeroImage } from '../components/HeroImage';
import { NavBar } from '../components/NavBar';
import { ContactForm } from '../components/ContactForm';
import { HeadingOne } from '../components/HeadingOne';
import styles from '../styles/index.module.scss';

import { PrismaClient, Contact } from '@prisma/client';

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const contacts: Contact[] = await prisma.contact.findMany();
  return (
    console.log(contacts),
    {
      props: {
        initialContacts: contacts,
      },
    }
  );
}

const Home: NextPage = () => {
  const [isContact, setIsContact] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [array1] = useState([
    'Matt Johnson',
    'Matt Johnson',
    'Bart Paden',
    'Ryan Doss',
    'Jared Malcolm',
  ]);
  const [array2] = useState([
    'Matt Johnson',
    'Bart Paden',
    'Bart Paden',
    'Jordan Heigle',
    'Jordan Heigle',
    'Tyler Viles',
  ]);
  const [newArray, setNewArray] = useState<string[]>([]);

  const handleClick = () => {
    !isClicked
      ? setIsClicked(true)
      : alert('You have already clicked this button');
    //combine both arrays into one
    let array = [...array1, ...array2];

    setNewArray(array.filter((item, index) => array.indexOf(item) === index));
  };

  return (
    <div>
      <Head>
        <title>Midwestern Interactive</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main>
        <div className={styles.mainWrapper}>
          <NavBar setIsContact={setIsContact} isContact={isContact} />
          {!isContact && <HeroImage />}
          {!isContact && (
            <>
              <HeadingOne isContact={isContact}>
                Remove the duplicates in 2 Javascript arrays (found in readme),
                add the results to an array and output the list of distinct
                names in an unordered list below this paragraph when{' '}
                <a onClick={handleClick}>this link</a> is clicked. If the
                operation has been completed already, notify the user that this
                has already been done.
              </HeadingOne>
              <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                {!isClicked && (
                  <>
                    <ul
                      style={{
                        color: 'white',
                        listStyle: 'none',
                        padding: '0px',
                      }}
                    >
                      {array1.map((name, index) => (
                        <li style={{ color: 'white' }} key={index}>
                          {name}
                        </li>
                      ))}
                    </ul>
                    <ul
                      style={{
                        color: 'white',
                        listStyle: 'none',
                        padding: '0px',
                      }}
                    >
                      {array2.map((name, index) => (
                        <li style={{ color: 'white' }} key={index}>
                          {name}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {isClicked && (
                  <ul
                    style={{
                      color: 'white',
                      listStyle: 'none',
                      padding: '0px',
                    }}
                  >
                    {newArray.map((name, index) => (
                      <li style={{ color: 'white' }} key={index}>
                        {name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </>
          )}

          {isContact && (
            <div className={styles.Contact}>
              <HeadingOne isContact={isContact}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                dos eiusmod tempor incididunt ut labore et trace dolore magna
                aliqua.
                <br />
                <br />
                Proin sagittis nisl rhoncus mattis rhoncus. At augue eget arcu
                dictum varius duis at consectetur lorem.
              </HeadingOne>
              <ContactForm />
            </div>
          )}
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
