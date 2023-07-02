import React, { useEffect, useState, useRef } from 'react';
import { api_token } from '../globals/globals';
import { Link } from 'react-router-dom';
import { ReactComponent as Icon } from '../svgs/search.svg';
import noPoster from '../images/no-movie-poster.jpg';

function Search ( {closeMenu} ) {

    const [movieData, setMovieData] = useState([]);
    const [query, setQuery] = useState('');
    const [openSearch, setOpenSearch] = useState(false);

    const searchWrapperRef = useRef(null);
    
    //useEffect to fetch movie data from API
    useEffect(() => {
        const fetchMovie = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?language=en-US&query=${query}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + api_token
                }
            });

            let data = await response.json();
            data = data.results.splice(0, 6);
            setMovieData(data);
        }
        fetchMovie();
    }, [query]);

    const handleChange = (event) => {
        setQuery(event.target.value);
    };
  
    const toggleSearch = () => {
      setOpenSearch(!openSearch);
      setMovieData([]);
      setQuery('');
    };

    const closeSearch = () => {
        setOpenSearch(false);
        setMovieData([]);
        setQuery('');
    };

    // Close search input when clicking outside of the search wrapper
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (
            searchWrapperRef.current &&
            !searchWrapperRef.current.contains(event.target)
          ) {
            setOpenSearch(false);
            setMovieData([]);
            setQuery('');
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [searchWrapperRef]);

    function formatDate(string) {
        const date = new Date(string);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString([], options);
    }

    // Format rating to 1 decimal place. Sometimes the API returns 0, if so, return 'No Rating'
    function formatRating (rating) {
        let ratingNumber = parseFloat(rating);
        if (ratingNumber === 0) {
            ratingNumber = toString(ratingNumber);
            ratingNumber = 'No Rating';
            return ratingNumber;
        } else {
            return (ratingNumber.toFixed(1) + ' / 10');
        }
    }

    return (
        <div className="search-wrapper" ref={searchWrapperRef}>

            <button className='search-icon' onClick={toggleSearch} title='Search'>
                <Icon onClick={closeMenu}/>
            </button>

            <div className={`search-input ${openSearch ? 'open' : ''}`}>
                <input placeholder="Search" type="text" value={query} onChange={handleChange} />
            </div>

            <ul className='search-results'>
                {movieData.length === 0 ? null : movieData.map((movie) => {
                    return (
                        <li key={movie.id}>
                            <div className="info">
                                <Link to={`/movie/${movie.id}`} onClick={closeSearch}>
                                    {movie.poster_path === null ? <img src={noPoster} alt="No poster" /> :
                                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>}
                                    <h2>{movie.title}</h2>
                                    <p>{formatDate(movie.release_date)}</p>
                                    <div className='search-rating'>{formatRating(movie.vote_average)}</div>
                                </Link>
                            </div>
                        </li>
                    )
                })}    
            </ul>

        </div>
    )
}

export default Search;