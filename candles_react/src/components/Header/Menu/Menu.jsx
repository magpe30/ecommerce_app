import React from 'react';
import { useSelector } from 'react-redux';
import styles from './menu.module.scss';
import { Link } from 'react-router-dom';

const Menu = () => {

  const { cartTotalQuantity } = useSelector(state => {
    return state.cart;
  });
  
  return (
    <div className={styles.expandable}>
      <div className={styles.routes}>
        <Link to='/shop' className={styles.link}>SHOP</Link>
        <Link to="/about" className={styles.link}>ABOUT</Link>
        <Link to="/blog" className={styles.link}>BLOG</Link>
      </div>
      <div className={styles.cart}>
        <Link to="/signin" className={styles.signInLink} >Sign in</Link>
        <Link className={styles.bag} to="/cart">
          <p>Cart</p>
          <span>{cartTotalQuantity}</span>
        </Link>
      </div>
    </div>
  )
};

export default Menu;