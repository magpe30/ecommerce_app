import styles from'./app.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <p className={styles.logo}>Candles</p>
        <div className={styles.routes}>
          <a href="/">SHOP</a>
          <a href="/">ABOUT</a>
          <a href="/">BLOG</a>
        </div>
        <span className={styles.cart}>
          <img src="cart-icon.png" alt="shopping cart"/>
        </span>
      </div>
      <div className={styles.hero}>
        <div className={styles.text}>
          <h1>Inspring Candles for your interior</h1>
          <p>Welcome to candles website. Feel free to look around, I am sure you will find something for yourself</p>
        </div>
        <div className={styles.button}>
          <button>Shop now</button>
        </div>
      </div>
    </div>
  );
}

export default App;
