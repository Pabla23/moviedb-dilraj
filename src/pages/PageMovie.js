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

            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + api_token
                }
            });

            let data = await response.json();
            console.log(data);
            setMovieData(data);
        }

        fetchMovie();

    }, [id]);

	document.title = `Movie - ${appTitle}`;

	return (
		<section>
			<SingleMovie movieObj={movieData} />
		</section>
	);
};

export default PageMovie;