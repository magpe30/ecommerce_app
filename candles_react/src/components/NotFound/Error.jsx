import React from 'react';
import { Link } from 'react-router-dom';
import styles from './notfound.module.scss';

const Error = () => {
    return (
        <div className={styles.notFoundContainer}>
            <div className={styles.info}>
                <h1>500</h1>
                <p>Oh no... something went wrong. </p>
                <p>Try again and come back <Link to="/" className={styles.home}><span>HOME</span></Link></p>
            </div>
        </div>
    )
};

export default Error;