import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaSearch,
  FaListUl,
  FaTimes,
  FaKey,
  FaUserCheck,
  FaThLarge,
  FaUserFriends,
} from 'react-icons/fa';
import styles from './NavBar.module.css';
import logo from '../../assets/logo.svg';

const NavBar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prev) => !prev);
  };

  const closeMenu = () => {
    setClicked(false);
  };

  return (
    <header className={styles.header}>
      <section className={styles.container}>
        <div className={styles.logo}>
          <Link to='/'>
            <img src={logo} alt='logo' className={styles['logo-icon']} />
          </Link>
          <h1 className={styles['logo-text']}>
            <Link to='/'>Cloneboxd</Link>
          </h1>
        </div>
        <nav
          className={
            clicked ? `${styles.nav} ${styles.clicked}` : `${styles.nav}`
          }
        >
          <ul className={styles['nav-links']}>
            <li>
              <Link to='/' className={styles['nav-link']} onClick={closeMenu}>
                <FaUserCheck className={styles['nav-icon']} />
                Sign In
              </Link>
            </li>
            <li>
              <Link to='/' className={styles['nav-link']} onClick={closeMenu}>
                <FaKey className={styles['nav-icon']} />
                Create Account
              </Link>
            </li>
            <li>
              <Link to='/' className={styles['nav-link']} onClick={closeMenu}>
                <FaThLarge className={styles['nav-icon']} />
                Films
              </Link>
            </li>
            <li>
              <Link to='/' className={styles['nav-link']} onClick={closeMenu}>
                <FaUserFriends className={styles['nav-icon']} />
                Members
              </Link>
            </li>
          </ul>
          <div className={styles['nav-search']}>
            <input type='text' className={styles['nav-search-text']} />
            <button type='submit' className={styles['nav-search-submit']}>
              <FaSearch />
            </button>
          </div>
        </nav>
        <div className={styles.hamburger} onClick={handleClick}>
          {clicked ? <FaTimes /> : <FaListUl />}
        </div>
      </section>
    </header>
  );
};
export default NavBar;
