import styles from './main.module.scss';

const Main = () => {
    return (
    <>
        <div className={styles.hero}>
            <div className={styles.text}>
                <h1>Inspring Candles for your interior</h1>
                <p>Welcome to candles website. Feel free to look around, we're sure you will find something for yourself</p>
            </div>
            <div className={styles.button}>
                <button>Shop now</button>
            </div>
        </div>
        <div className={styles.body}>
            <div className={styles.bodyText}>
                <h1>What we do</h1>
                <p>Candles. is a leading candles specialist, providing scented candles
                    for conscious customers for every occasion. We pride ourselves on our unique
                    product range - created by our in-house design team and global brand partnership.
                    We are praised for individuality, design and quality.
                </p>
                <button>Learn more</button>
            </div>
        </div>
    </>
    )
};

export default Main;