import { Link } from 'react-router-dom';
import styles from './Welcome.module.css';

const Welcome = () => {
  return (
    <section>
      <div className={styles['backdrop-container']}>
        <img
          src='http://image.tmdb.org/t/p/w1280/ovM06PdF3M8wvKb06i4sjW3xoww.jpg'
          className={styles.backdrop}
          alt='backdrop'
        />
      </div>
      <div className={styles.container}>
        <h2 className={styles.headline}>
          Track films you've watched. <br />
          Save those you want to see. <br />
          Tell your friends what's good. <br />
        </h2>
        <Link to='/' className={styles['get-started']}>
          Get started &#8212; It's free!
        </Link>
        <p className={styles.tagline}>
          The social network for film lovers. <br className={styles.break} /> A
          clone of Letterboxd.
        </p>
      </div>
    </section>
  );
};
export default Welcome;
