import {
  FaHeart,
  FaEye,
  FaStar,
  FaCalendar,
  FaAlignLeft,
  FaThLarge,
} from 'react-icons/fa';
import styles from './Highlights.module.css';

const Highlights = () => {
  return (
    <section className={styles.container}>
      <p className={styles.tagline}>Cloneboxd lets you...</p>
      <div className={styles.highlights}>
        <div className={styles.highlight}>
          <FaEye className={styles['highlight-icon']} />
          <p>
            Keep track of every film you've ever watched (or just start from the
            day you join)
          </p>
        </div>
        <div className={styles.highlight}>
          <FaHeart className={styles['highlight-icon']} />
          <p>
            Show some love for your favorite films, lists and reviews with a
            “like”
          </p>
        </div>
        <div className={styles.highlight}>
          <FaAlignLeft className={styles['highlight-icon']} />
          <p>
            Write and share reviews, and follow friends and other members to
            read theirs
          </p>
        </div>
        <div className={styles.highlight}>
          <FaStar className={styles['highlight-icon']} />
          <p>
            Rate each film on a five-star scale (with halves) to record and
            share your reaction
          </p>
        </div>
        <div className={styles.highlight}>
          <FaCalendar className={styles['highlight-icon']} />
          <p>
            Keep a diary of your film watching (and upgrade to Pro for
            comprehensive stats)
          </p>
        </div>
        <div className={styles.highlight}>
          <FaThLarge className={styles['highlight-icon']} />
          <p>
            Compile and share lists of films on any topic and keep a watchlist
            of films to see
          </p>
        </div>
      </div>
    </section>
  );
};
export default Highlights;
