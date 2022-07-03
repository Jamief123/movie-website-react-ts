import { Movie } from "../api/MovieApi";
import styles from './MovieItem.module.css';

interface MovieItemProps {
    movie: Movie;
}
const MovieItem: React.FC<MovieItemProps> = (props: MovieItemProps) => {
    const posterPath = "https://image.tmdb.org/t/p/w500/";
    return (
        <div className={styles.item}>
            <img
            className={styles.poster}
            src={`${posterPath}${props.movie.poster_path}`}
            />
            <p>{props.movie.overview}</p>
        </div>
    )
};

export default MovieItem;