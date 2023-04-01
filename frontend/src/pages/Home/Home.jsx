import styles from './Home.module.css';
import Welcome from '../../components/Welcome/Welcome';
import PopularMovies from '../../features/movies/PopularMovies/PopularMovies';
import Highlights from '../../components/Highlights/Highlights';

const Home = () => {
  return (
    <div className={styles.main}>
      <Welcome />
      <PopularMovies />
      <Highlights />
    </div>
  );
};
export default Home;
