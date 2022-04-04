import Image from 'next/image';

import styles from '../styles/Home.module.css'
import NavigationBar from '../components/navigation_bar';


const Location = ({ coffeePlace, id }) => {
    return (
        <main className={styles.main}>
            <NavigationBar/>
            <h1 className={styles.title}>{coffeePlace.locationName}</h1>
            <Image src={`/images/${coffeePlace.locationPhoto}`} alt="coffee" width="200" height="250" />
            <p><strong>About the place:</strong> {coffeePlace.locationDescription}</p>
            <p></p>
            <p><strong>Mini review:</strong> {coffeePlace.locationReview} | <strong>Score:</strong> {coffeePlace.locationStars}   </p>
        </main>
    );
};

Location.getInitialProps = async({ query }) => {
    // const res = require('../public/locations.json');
    // const coffeeData = res[query.id];

    const res = await fetch(`https://bkcm6x6ji2.execute-api.ap-southeast-2.amazonaws.com/nextdemo/coffee?id=${query.id}`);
    const coffeeData = await res.json();

    return { id: query.id, coffeePlace: coffeeData};
};

export default Location;