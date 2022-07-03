import { Movie } from "../api/data/MovieModels";
import MovieItem from "./MovieItem";
import styles from "./MovieList.module.css";

interface MovieListProps {
    movies: Movie[];
}
const MovieList: React.FC<MovieListProps> =  (props: MovieListProps) => {
    return (
        <div className={styles.list}>
        {props.movies.map((movie) =>(
            <MovieItem
            key={movie.id}
            movie={movie}
            />
        ))}
        </ div>
    );
}

export default MovieList;