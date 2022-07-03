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
        console.log(props.movie)
        return (
            <>
                <div className={styles.bannerContainer}>
                    <img 
                    className={styles.image}
                    src={`http://image.tmdb.org/t/p/w1280/${props.movie.backdrop_path}`}
                    />
                    <p className={styles.title}>{props.movie.original_title}</p>

                    <span className={styles.italic} > Genre: <>
                        {props.movie.genres.map(genre => {
                            return <span>{` ${genre.name} |`}</span>
                        })}
                        </>
                    </span>

                    <p>Release Date: {props.movie.release_date}</p>
                    <p>Runtime: {props.movie.runtime} minutes</p>
                    <p>Avg Rating: {props.movie.vote_average} minutes</p>
                    <hr />
                    <p className={styles.italic}>Overview</p>
                    <p>{props.movie.overview}</p>
                </div>

                
                <div className={styles.additionalInfoContainer}>
                    <div className={`${styles.castContainer} ${styles.castContainerItem}`}>
                    <h2 className={styles.flexHeading}>Cast</h2>
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
                        <h2 className={styles.flexHeading}>Produced By</h2>
                        <ul>
                            {props.movie.production_companies.map((company) => {
                                return (
                                    <li>{company.name}</li>
                                )
                            })}
                        </ul>
                    </div>

                    <div>
                    <h2 className={styles.flexHeading}>Languages</h2>
                        <ul>
                            {props.movie.spoken_languages.map((language) => {
                                return (<li>{language.name}</li>)
                            })}
                        </ul>
                    </div>
                </div>
            </>
        )
    }

}

export default Banner;