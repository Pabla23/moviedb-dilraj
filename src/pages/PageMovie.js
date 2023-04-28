import { appTitle } from '../globals/globals';
import { useParams } from 'react-router-dom';
import SingleMovie from '../components/SingleMovie';
import { useEffect, useState } from 'react';
import { api_token } from '../globals/globals';

const PageMovie = () => {

	const { id } = useParams();

	const [movieData, setMovieData] = useState([]);
    
    useEffect(() => {

        const fetchMovie = async () => {

            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + api_token
                }
            });

            let rawMovieData = await res.json();
            setMovieData(rawMovieData);

        }

        fetchMovie();

    }, [id]);

	document.title = `Movie - ${appTitle}`;

	return (
		<section>
			<h2>Movie Page {id}</h2>
			<p>Movie details will be here</p>
			<SingleMovie movieObj={movieData} />
		</section>
	);
};

export default PageMovie;