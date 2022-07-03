import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Movie } from "../api/data/MovieModels";
import { getMovieForId } from "../api/MovieApi";
import Banner from "../components/MovieDetails/Banner";

const MovieDetails: React.FC  = () =>  {
    const { id } =  useParams()

    const[movie, setMovie] = useState<Movie>();
    const[isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        //Todo: Add better null/invalid id handling
        let movie: Movie
        if(id != null && typeof parseInt(id) === "number") {
            getMovieForId(parseInt(id)).then(res => {
                movie = res
                setMovie(res)
                setIsLoading(false)
            }, (error) => {
                console.log(error);
            });
        }
    }, [isLoading]);

    if (isLoading) {
        return <>Loading...</>
    }
    return (
        <Banner movie={movie}/>
    )
    


}

export default MovieDetails;