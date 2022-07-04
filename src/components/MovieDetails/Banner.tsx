import { Typography } from "@mui/material";
import { Movie } from "../../api/data/MovieModels";
import styles from './Banner.module.css'

interface BannerProps {
    movie: Movie | undefined
}
const Banner: React.FC<BannerProps> = (props: BannerProps) => {
    if (props.movie === undefined){
        // Handle this case
        return <>No movie found</>
    } else {
        return (
            <>
                <img 
                className={styles.image}
                src={`http://image.tmdb.org/t/p/w1280/${props.movie.backdrop_path}`}
                />
                <Typography variant="h2">
                    {props.movie.original_title}
                </Typography>
                <div className={styles.bannerFlexContainer}>
                    <div className={styles.bannerContainer}>
                            <span className={styles.preContent}>Genre:</span>
                            <span className={styles.italic} >  <>
                                {props.movie.genres.map(genre => {
                                    return <span>{` ${genre.name} |`}</span>
                                })}
                                </>
                            </span>
                        <p><span className={styles.preContent}>Release Date:</span> {props.movie.release_date}</p>
                        <p><span className={styles.preContent}>Runtime:</span> {props.movie.runtime} minutes</p>
                        <p><span className={styles.preContent}>Avg Rating:</span> {props.movie.vote_average} minutes</p>
                        <p className={styles.preContent}>Overview</p>
                        <p>{props.movie.overview}</p>
                    </div>                    
                    <div className={styles.additionalInfoContainer}>
                        <div className={`${styles.castContainer} ${styles.castContainerItem}`}>
                        <p className={styles.flexHeading}>Cast</p>
                            {/* TODO: Move this to a component
                                TODO: Handle empty images */}
                            {props.movie.credits.cast.slice(0, 6).map(cast => {
                                return (
                                    <div className={styles.castItem}>
                                        <img 
                                        className={styles.profilePic}
                                        src={`https://image.tmdb.org/t/p/w138_and_h175_face/${cast.profile_path}`}
                                        />
                                        <p>{cast.name}</p>
                                    </div>
                                )
                            })}
                        </div>
                        
                        <div>
                            <p className={styles.flexHeading}>Produced By</p>
                            <ul>
                                {props.movie.production_companies.map((company) => {
                                    return (
                                        <li>{company.name}</li>
                                    )
                                })}
                            </ul>
                        </div>

                        <div>
                        <p className={styles.flexHeading}>Languages</p>
                            <ul>
                                {props.movie.spoken_languages.map((language) => {
                                    return (<li>{language.name}</li>)
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default Banner;