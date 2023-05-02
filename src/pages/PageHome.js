// Page - Home
import { appTitle } from '../globals/globals';
import Movies from '../components/Movies';
import { useEffect, useState } from 'react';
import { api_token } from '../globals/globals';
import SortButtons from '../components/SortButtons';
import Slideshow from '../components/Slideshow';

const PageHome = ({sort = "popular"}) => {

    document.title = `${appTitle}`;

    const [movieData, setMovieData] = useState([]);

    useEffect (() => {

        const fetchMovies = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${sort}?language=en-US&page=1`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + api_token
                }});

            let data = await response.json();
            data = data.results.splice(0, 12);
            console.log(data);

            setMovieData(data);
        };

        fetchMovies();

    }, [sort]);

    return (
        <div className='home-wrapper'>
            <Slideshow movieData = {movieData} />
            <div className='home-content'>
                <SortButtons/>
                <Movies movieData = {movieData}/>
            </div>
        </div>
    );
};

export default PageHome;