import axios from "axios"
import * as types from "./data/MovieModels";
import { Movie } from "./data/MovieModels";

type Nullable<T> = T | null;

export type GetNowPlayingResponse = {
    dates: {
        maximum: Nullable<string>,
        minimum: Nullable<string>
    }
    page: Nullable<number>,
    results: Nullable<types.Movie[]>,
    total_pages: Nullable<number>,
    total_results: Nullable<number>;
}

const baseUrl = "https://api.themoviedb.org/3/";
const API_KEY = process.env.REACT_APP_API_KEY

export async function getNowPlaying(): Promise<GetNowPlayingResponse> {
    try {
        const { data, status } = await axios.get<GetNowPlayingResponse> (
            `${baseUrl}movie/now_playing?api_key=${API_KEY}`,
            {
                headers: {
                  Accept: 'application/json',
                },
            },
        );
        return Promise.resolve(data);
    } catch (error) {
        console.log(error)
        return Promise.reject(error);
    }
}

export async function getMovieForId(id: number): Promise<Movie> {
    try {
        const { data, status } = await axios.get<Movie> (
            `${baseUrl}movie/${id}?api_key=${API_KEY}&append_to_response=credits`,
            {
                headers: {
                  Accept: 'application/json',
                },
            },
        );
        return Promise.resolve(data);
        
    } catch (error) {
        console.log(error)
        return Promise.reject(error);
    }
}