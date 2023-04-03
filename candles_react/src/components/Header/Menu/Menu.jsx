import styles from './menu.module.scss';
import { Link } from 'react-router-dom';

const Menu = () => {
  
    return (
        <div className={styles.expandable}>
            <div className={styles.routes}>
              <Link to={'/shop'} className={styles.link}>SHOP</Link>
              <Link href="/about" className={styles.link}>ABOUT</Link>
              <Link href="/blog" className={styles.link}>BLOG</Link>
            </div>
            <div className={styles.cart}>
              <button>Sign in</button>
              <div className={styles.bag}>
                <p>Cart</p>
                <span>0</span>
              </div>
            </div>
        </div>
    )
};

export default Menu;