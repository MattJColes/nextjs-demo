import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/Home.module.css'
import NavigationBar from '../components/navigation_bar';

import coffeePhoto from '../public/images/matt-brighton-coffee.jpeg'

const Home = ({ coffee }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Locations</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NavigationBar />
        <h1 className={styles.title}>
          Home
        </h1>
        <Image 
          src={  coffeePhoto } 
          alt="Coffee!"
          width={200}
          height={250}
        />
        <h3>Rcent coffee places visited:</h3>
        <ul>
          {coffee.map(coffee => (
            <li key={coffee.id}>
              <Link href={`/location?id=${coffee.id}`}><a>{coffee.locationName}</a></Link>
            </li>
          ))}
        </ul>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
};

Home.getInitialProps = async() => {
  const res = require('../public/locations.json');
  const coffeeData = res;
  return { coffee: coffeeData };
};

export default Home;