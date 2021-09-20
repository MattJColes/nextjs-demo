import image from 'next/image';
import axios from 'axios';

import styles from '../styles/Home.module.css'
import NavigationBar from '../components/navigation_bar';

const Location = ({ comment, id }) => {
    return (
        <div className={styles.container}>
            <NavigationBar/>
            <h1>{comment[0].name}</h1>
            <p>{comment[0].body}</p>
        </div>
    );
};

Location.getInitialProps = async({ query }) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?id=${query.id}`);
    const commentData = res.data;
    return { id: query.id, comment: commentData};
};

export default Location;