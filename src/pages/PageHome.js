// Page - Home
import { appTitle, api_token } from '../globals/globals';
import Movies from '../components/Movies';
import { useEffect, useState } from 'react';
import SortButtons from '../components/SortButtons';
import Slideshow from '../components/Slideshow';
import { ReactComponent as Arrow } from '../svgs/arrow.svg';


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
            setMovieData(data);
        };

        fetchMovies();

    }, [sort]);

    return (
        <div className='home-wrapper' id='home'>
            <Slideshow movieData = {movieData} />
            <div className='home-content'>
                <SortButtons/>
                <Movies movieData = {movieData}/>
                <div className='top-btn'>
                    <a href="#home">
                        <Arrow className='arrow'/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PageHome;