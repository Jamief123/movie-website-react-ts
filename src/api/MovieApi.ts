import axios from "axios"

type Nullable<T> = T | null;

export type Movie = {
    id: Nullable<number>,
    poster_path: Nullable<string>,
    overview: Nullable<string>,
    vote_average: Nullable<number>,
    vote_count: Nullable<number>,
    adult: Nullable<boolean>,
    release_date: Nullable<string>,
    genre_ids: Nullable<number[]>,
    original_title: Nullable<string>,
    original_language: Nullable<String>,
    title: Nullable<string>,
    backdrop_path: Nullable<string>,
    popularity: Nullable<number>,
    video: Nullable<boolean>;
}

type GetNowPlayingResponse = {
    dates: {
        maximum: Nullable<string>,
        minimum: Nullable<string>
    }
    page: Nullable<number>,
    results: Nullable<Movie[]>,
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