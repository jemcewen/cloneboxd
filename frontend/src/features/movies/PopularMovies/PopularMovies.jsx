import { useGetPopularMoviesQuery } from '../../api/apiSlice';
import styles from './PopularMovies.module.css';

const PopularMovies = () => {
  const baseUrl = process.env.REACT_APP_IMAGE_BASE_URL;

  const {
    data: movies,
    isLoading,
    isSuccess,
    isError,
  } = useGetPopularMoviesQuery();

  let content;

  if (isLoading) {
    content = <>Loading...</>;
  } else if (isSuccess) {
    content = (
      <div className={styles.popular}>
        {movies.map((movie) => (
          <img
            src={`${baseUrl}/w342/${movie.poster_path}`}
            className={styles.poster}
            alt={movie.title}
          />
        ))}
      </div>
    );
  } else if (isError) {
    content = <>Unable to fetch movies</>;
  }

  return <section className={styles.container}>{content}</section>;
};
export default PopularMovies;
