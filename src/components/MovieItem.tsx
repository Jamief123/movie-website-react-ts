import { Card, CardActionArea, CardContent, CardMedia, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Movie } from "../api/data/MovieModels";
import { truncateWithElipsis } from "../util/StringUtils";
import styles from './MovieItem.module.css';

interface MovieItemProps {
    movie: Movie;
}
const MovieItem: React.FC<MovieItemProps> = (props: MovieItemProps) => {
    const posterPath = "https://image.tmdb.org/t/p/w500/";
    return (
        <Link 
        underline = "none" 
        component={RouterLink} 
        to={'/movie/' + props.movie.id}
        >
            <Card className={styles.cardItem}>
                    <CardActionArea>
                        <CardMedia 
                            component="img"
                            image={`${posterPath}${props.movie.poster_path}`}
                            />
                        <CardContent>
                            <Typography className={styles.movieTitle} gutterBottom variant="h5" component="div">
                                {props.movie.original_title}
                            </Typography>
                            {props.movie.overview && <Typography variant="body2" color="text.secondary">
                                {truncateWithElipsis(props.movie.overview)}
                            </Typography>}
                        </CardContent>
                    </CardActionArea>
            </Card>
        </Link>
        // <div className={styles.item}>
        //     <Link to={'/movie/' + props.movie.id}>
        //         <img
        //         className={styles.poster}
        //         src={`${posterPath}${props.movie.poster_path}`}
        //         />
        //     </Link>

        //     <p className={styles.overview}>{props.movie.overview}</p>
        // </div>
    )
};

export default MovieItem;