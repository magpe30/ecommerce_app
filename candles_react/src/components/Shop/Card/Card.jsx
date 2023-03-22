import styles from './card.module.scss';

const Card = ({name, source, price}) => {
    return (
        <div className={styles.card}>
            <img className={styles.cardPic} alt={`${name} candle`} src={source} />
            <div className={styles.cardInfo}>
                <p>{name}</p>
                <p>{`$ ${price}`}</p>
            </div>
            <button>View more</button>
        </div>
    )
};

export default Card;