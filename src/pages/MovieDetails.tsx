import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Movie } from "../api/data/MovieModels";
import { getMovieForId, getSimilarMovies } from "../api/MovieApi";
import Carousel from "../components/Carousel";
import Banner from "../components/MovieDetails/Banner";
import { Typography } from "@mui/material";

const MovieDetails: React.FC  = () =>  {
    const { id } =  useParams()

    const[movie, setMovie] = useState<Movie>();
    const[similarMovies, setSimilarMovies] = useState<Movie[]>([]);
    const[isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        //Todo: Add better null/invalid id handling
        let movie: Movie
        if(id != null && typeof parseInt(id) === "number") {
            getMovieForId(parseInt(id)).then(res => {
                movie = res
                setMovie(res)
            }, (error) => {
                console.log(error);
            });
            getSimilarMovies(parseInt(id)).then(res => {
                setSimilarMovies(res.results ? res.results : []);
                setIsLoading(false)
            }, (error) => {
                console.log(error);
                setIsLoading(false)
            });
        }
    }, [isLoading, id]);

    if (isLoading) {
        return <>Loading...</>
    }
    return (
        <>
            <Banner movie={movie}/>
            <Typography variant="h3">
                Similar Movies
            </Typography>
            
            <Carousel movies={similarMovies}/>
        </>
        
    )


}

export default MovieDetails;