import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Movie } from "../api/data/MovieModels"
import MovieList from "../components/MovieList"
import { getSearchQuery } from '../api/MovieApi';
import { Typography } from "@mui/material";

const SearchResults  = () =>  {
    const { query } =  useParams()
    const[isLoading, setIsLoading] = useState(true);
    const[movieList, setMovieList] = useState<Movie[]>([]);

    useEffect(() => {
        if(typeof query === "string" ){
            getSearchQuery(query).then( res => {
                setIsLoading(false)
                setMovieList(res.results ? res.results : []);
            }, (error => {
                console.log(`Error: ${error}`);
            }));    
        }
    }, [query]);

    if (isLoading) {
        return <div>Loading...</div>
    } else {
        return (
            <>
            <Typography variant="h2">
                Search Results for {query}
            </Typography>
            <MovieList movies={movieList} />
            </>
        )
    }   
}

export default SearchResults;