import styles from'./app.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <p className={styles.logo}>Candles.</p>
        <div className={styles.routes}>
          <a href="/">SHOP</a>
          <a href="/">ABOUT</a>
          <a href="/">BLOG</a>
        </div>
        <span className={styles.cart}>
          <img src="icon-customer.png" alt="shopping cart"/>
          <img src="icon-bag.png" alt="shopping cart" className={styles.shopping}/>
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
    </div>
  );
}

export default App;
