import React from 'react';
import { Link } from 'react-router-dom';
import styles from './notfound.module.scss';

const NotFound = () => {
    return (
        <div className={styles.notFoundContainer}>
            <div className={styles.info}>
                <h1>404</h1>
                <p>You might be lost...</p>
                <p>Come back <Link to="/" className={styles.home}><span>HOME</span></Link></p>
            </div>
        </div>
    )
};

export default NotFound;
