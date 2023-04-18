import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';

import Menu from './Menu/Menu';

const Header = () => {
  const { cartTotalQuantity } = useSelector(state => {
    return state.cart
  });

  const [onClick, setOnClick] = useState(false);
  const [windowDimension, setWindowDimension] = useState(null);
 
  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  const handleClick = () => setOnClick(!onClick);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 750;

  const slug = onClick ? 'cross' : 'menu';

  return (
    <>
      <div className={styles.header}>
        <Link to='/' className={styles.logoLink}><p className={styles.logo}>Candles.</p></Link>
        {
          isMobile ? <button onClick={handleClick} className={styles.menuIcon}><img src={`${slug}-icon.png`} alt="menu icon"/></button>
          : <>
              <div className={styles.routes}>
              <Link to='/shop'>SHOP</Link>
              <Link to="/about">ABOUT</Link>
              <Link href="/blog">BLOG</Link>
              </div>
              <div className={styles.cart}>
                <Link to="/signin" className={styles.signInLink} >Sign in</Link>
                <Link className={styles.bag} to="/cart">
                  <p>Cart</p>
                  <span>{cartTotalQuantity}</span>
                </Link>
              </div>
            </> 
        }

      </div>  
      {onClick && <Menu />}
    </>
  )
}

export default Header;