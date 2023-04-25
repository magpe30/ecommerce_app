import styles from './success.module.scss';

const Success = () => {

    return (
        <div className={styles.orderContainer}>
            <h1>Thank you</h1>
            <h2>Your order was placed!</h2>
            <p>Please note that delivery can take up to 5 working days.</p>
            <img src="../package.svg" alt="package"/>
        </div>
    )
};

export default Success;