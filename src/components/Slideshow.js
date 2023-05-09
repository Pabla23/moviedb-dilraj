import React, { useState, useEffect } from 'react';
import { api_token } from '../globals/globals';
import { Link } from 'react-router-dom';

function Slideshow () {

    const [movieData, setMovieData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect (() => {

        const fetchMovies = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + api_token
                }});

            let data = await response.json();
            data = data.results.splice(0, 5);
            setMovieData(data);
        };

        fetchMovies();

    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) =>
                prevIndex === movieData.length - 1 ? 0 : prevIndex + 1
            );
        }, 6000);
        return () => clearInterval(interval);
    }, [movieData]);

    const currentMovie = movieData[activeIndex];

    function formatDate(string) {
        const date = new Date(string);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString([], options);
    }
      
      function formatRating (rating) {
        let ratingNumber = parseFloat(rating);
        return ratingNumber.toFixed(1);
    }

    //mapped through movieData 3 times to avoid key error in console... and for stlying purposes
    return (
        <div className='slideshow-wrapper'>
            <div className='slideshow'>
                {movieData.map((movie, i) => (
                    <div key={movie.title}>
                        <img className={`slide ${i === activeIndex ? 'active' : ''}`} key={i} src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.title} />
                    </div>
                ))}
            </div>

            <div className = "slide-info-wrapper">
                {movieData.map((movie, i) => (
                    <div className={`slide-info ${i === activeIndex ? 'active' : ''}`} key={i}>
                        <h1>{movie.title}</h1>
                        <p>{formatDate(movie.release_date)}</p>
                        <div className='movie-rating'>{formatRating(movie.vote_average)} / 10</div>
                        <Link to={`/movie/${currentMovie.id}`} >More Info</Link>
                    </div>
                ))}
            </div>

            <div className='indicators'>
                {movieData.map((movie, i) => (
                    <div key={movie.title} className={`indicator ${i === activeIndex ? 'active' : ''}`} onClick={() => setActiveIndex(i)}></div>
                ))}
            </div>
        </div>
    );

}

export default Slideshow;