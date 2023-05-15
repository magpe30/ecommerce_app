import React from 'react';
import { useEffect } from 'react';
import styles from './about.module.scss';

const About = () => {

    useEffect(() => {
        document.title = 'About | candles'
    }, []);

    return (
        <div className={styles.aboutContainer}>
          <section className={styles.heroSection}>
            <div className={styles.heroContent}>
                <h1 className={styles.heading}>About us</h1>
                <p>We are Candles! We make funky candles for your home.</p>
            </div>
            <img src="https://images.unsplash.com/photo-1602607203588-d6d0eda790e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="candles" />
          </section>
          <div className={styles.aboutInfo}>
                <h2>We make Candles!</h2>
                <p>We are a family-run candles ecommerce business that specializes in 
                    handcrafted candles with fruity and floral scents. Each of our candles 
                    is lovingly made by hand, 
                    and we take pride in the fact that no two candles are exactly alike.
                </p>
                <p>
                    Our candles are not only beautiful to look at, but they also smell amazing. 
                    We use only the finest quality ingredients to create our signature scents,
                    which are fruity and floral, and are sure to delight your senses.
                </p>
                <p>
                    One of the things that sets us apart from other candle makers is 
                    our hand-painted pots. Each of our candles is housed in a pot that has 
                    been hand-painted with funky and colorful symmetric patterns. Our pots 
                    are not only unique and eye-catching, but they&aposre also reusable, 
                    so you can enjoy them long after your candle has burned down.
                </p>
          </div>
        </div>
    )
};

export default About;