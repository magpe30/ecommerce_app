import styles from './card.module.scss';
import { Link } from 'react-router-dom';

const Card = ({name, source, price, url}) => {
    return (
        <div className={styles.card}>
            <img className={styles.cardPic} alt={`${name} candle`} src={source} />
            <div className={styles.cardInfo}>
                <p>{name}</p>
                <p>{`$ ${price}`}</p>
            </div>
            <Link to={url}><button>View more</button></Link>
        </div>
    )
};

export default Card;