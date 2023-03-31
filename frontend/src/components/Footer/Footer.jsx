import styles from './Footer.module.css';
import tmdb from '../../assets/tmdb.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.container}>
        <img
          src={tmdb}
          className={styles['tmdb-logo']}
          alt='the movie database'
        />
        <p className={styles.attribution}>
          This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </p>
      </section>
    </footer>
  );
};
export default Footer;
