import styles from './header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
      <div className={styles.header}>
        <Link to='/' className={styles.logoLink}><p className={styles.logo}>Candles.</p></Link>
        <div className={styles.routes}>
          <Link to='/shop'>SHOP</Link>
          <a href="/">ABOUT</a>
          <a href="/">BLOG</a>
        </div>
        <span className={styles.cart}>
          <img src="icon-customer.png" alt="shopping cart"/>
          <img src="icon-bag.png" alt="shopping cart" className={styles.shopping}/>
        </span>
      </div>  
  )
}

export default Header;