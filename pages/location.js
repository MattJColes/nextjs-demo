import Image from 'next/image';

import styles from '../styles/Home.module.css'
import NavigationBar from '../components/navigation_bar';

const Location = ({ coffeePlace, id }) => {
    return (
        <div className={styles.container}>
            <NavigationBar/>
            <h1>{coffeePlace.locationName}</h1>
            <p>{coffeePlace.locationDescription}</p>
        </div>
    );
};

Location.getInitialProps = async({ query }) => {
    // const res = await fetch(`https://fi8nnism5h.execute-api.ap-southeast-2.amazonaws.com/default/testCoffee?id=${query.id}`);
    // const coffeeData = await res.json();
    const res = require('../public/locations.json');
    const coffeeData = res[query.id];
    return { id: query.id, coffeePlace: coffeeData};
};

export default Location;