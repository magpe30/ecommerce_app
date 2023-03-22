import styles from './footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
            <div className={styles.logo}>
                <p className={styles.logo}>Candles.</p>
            </div>
            <div className={styles.routing}>
                <a href='/'>Shop</a>
                <a href='/'>About</a>
                <a href="/">Contact</a>
            </div>
            <p>© 2023 Candles Designer Boutique</p>
            </div>
        </div>
    )
};

export default Footer;