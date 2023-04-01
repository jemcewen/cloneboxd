import styles from './Footer.module.css';
import tmdb from '../../assets/tmdb.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <img
          src={tmdb}
          className={styles['tmdb-logo']}
          alt='the movie database'
        />
        <p className={styles.attribution}>
          This product uses the TMDB API but is not
          <br /> endorsed or certified by TMDB.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
