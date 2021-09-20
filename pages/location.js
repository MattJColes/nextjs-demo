import image from 'next/image';
import axios from 'axios';

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
    const res = await axios.get(`https://pdbkut2xpg.ap-northeast-1.awsapprunner.com/coffee/${query.id}`);
    const coffeeData = res.data;
    return { id: query.id, coffeePlace: coffeeData};
};

export default Location;