import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Movie } from "../api/data/MovieModels"
import MovieList from "../components/MovieList"
import { getSearchQuery } from '../api/MovieApi';

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
                <h1>Search Results for {query}</h1>
                <MovieList movies={movieList} />
            </>
        )
    }   
}

export default SearchResults;