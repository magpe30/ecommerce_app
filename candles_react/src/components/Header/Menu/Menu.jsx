import styles from './menu.module.scss';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className={styles.expandable}>
            <div className={styles.routes}>
              <Link to='/shop' className={styles.link}>SHOP</Link>
              <Link href="/about" className={styles.link}>ABOUT</Link>
              <Link href="/blog" className={styles.link}>BLOG</Link>
            </div>
            <div className={styles.cart}>
              <img src="icon-customer.png" alt="shopping cart"/>
              <img src="icon-bag.png" alt="shopping cart" className={styles.cart}/>
            </div>
        </div>
    )
};

export default Menu;