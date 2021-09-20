import Head from 'next/head';
import Link from 'next/link';
import image from 'next/image';
import Image from 'next/image'
import axios from 'axios';

import styles from '../styles/Home.module.css'
import NavigationBar from '../components/navigation_bar';

import coffeePhoto from '../public/images/matt-brighton-coffee.jpeg'

const Home = ({ comments}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
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
        <ul>
          {comments.map(comment => (
            <li key={comment.id}>
              <Link href={`/location?id=${comment.id}`}><a>{comment.name}</a></Link>
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
  const res = await axios.get("https://jsonplaceholder.typicode.com/comments");
  const commentData = res.data;
  const firstTenComments = commentData.slice(0, 9);
  return { comments: firstTenComments};
};

export default Home;