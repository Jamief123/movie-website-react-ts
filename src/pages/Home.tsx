import { useEffect, useState } from 'react'
import { Movie } from '../api/data/MovieModels';
import { getNowPlaying } from '../api/MovieApi'
import MovieList from '../components/MovieList';

const Home = () => {
    const[isLoading, setIsLoading] = useState(true);
    const[movieList, setMovieList] = useState<Movie[]>([]);

    useEffect(() => {
        getNowPlaying().then( res => {
            setIsLoading(false)
            setMovieList(res.results ? res.results : []);
        }, (error => {
            console.log(`Error: ${error}`);
        }));
    }, []);


    if (isLoading) {
        return <div>Loading...</div>
    } else {
        return (
            <>
            <h1>HI HUGHIE!!</h1>
                <MovieList movies={movieList} />
            </>
        )
    }

}

export default Home;