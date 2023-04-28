import { useEffect } from "react";
import { api_token } from "../globals/globals";
import MovieCard from "./MovieCard";
import { useState } from "react";
import SortButtons from "./SortButtons";

function Movies ({sort = "popular"}) {

    //good api call for popular movies
    //https://api.themoviedb.org/3/movie/popular?api_key=4a0223819e42e2d3e7177f358021bf2d&language=en-US&page=1

    const [movieData, setMovieData] = useState([]);

    useEffect (() => {

        const fetchMovies = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${sort}?language=en-US&page=1`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + api_token
                }});

            const data = await response.json();
            let dataTwelve = data.results.splice(0, 12);
            setMovieData(dataTwelve);
        };

        fetchMovies();

    }, [sort]);


  return (
    <div>
        <SortButtons/>
        {movieData.map((oneMovie, i) => <MovieCard key={i} movieObj={oneMovie} />)}
    </div>
  )
}

export default Movies;