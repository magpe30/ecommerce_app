import { useState, useEffect } from 'react';

import styles from './header.module.scss';
import { Link } from 'react-router-dom';

import Menu from './Menu/Menu';

const Header = () => {
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
                <button>Sign in</button>
                <div className={styles.bag}>
                  <p>Cart</p>
                  <span>0</span>
                </div>
              </div>
            </> 
        }

      </div>  
      {onClick && <Menu />}
    </>
  )
}

export default Header;