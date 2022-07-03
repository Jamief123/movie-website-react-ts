import { Link } from "react-router-dom";
import { Movie } from "../api/data/MovieModels";
import styles from './MovieItem.module.css';

interface MovieItemProps {
    movie: Movie;
}
const MovieItem: React.FC<MovieItemProps> = (props: MovieItemProps) => {
    const posterPath = "https://image.tmdb.org/t/p/w500/";
    return (
        <div className={styles.item}>
            <Link to={'/movie/' + props.movie.id}>
                <img
                className={styles.poster}
                src={`${posterPath}${props.movie.poster_path}`}
                />
            </Link>

            <p className={styles.overview}>{props.movie.overview}</p>
        </div>
    )
};

export default MovieItem;