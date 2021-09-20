import Link from 'next/link';

import styles from '../styles/Home.module.css'
import NavigationBar from '../components/navigation_bar';

const AboutPage = () => (
    <main  className={styles.main}>
        <NavigationBar />
        <h1 className={styles.title}>
          About
        </h1>
        <p>Matt here! This site is a collection of my favourite coffee places across Melbourne.</p>
        <p>A little about the place, my notes, a photo if i have one and a few other bits and pieces </p>
    </main>
);

export default AboutPage;