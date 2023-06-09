import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';
import FavButton from './FavButton';

function MovieCard({ movieObj, removeFromFavorites }) {

    function limitWords(string) {
        const words = string.split(' ');
        if (words.length <= 20) {
          return string;
        }
        return words.slice(0, 20).join(' ') + '...';
      }

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
        <div className="movie">
            <div className="movie-poster">
                {movieObj.poster_path === null ? 
                    <img src={noPoster} alt="No poster" /> : 
                    <img src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`} alt={movieObj.title} />
                }
            </div>
            <div className="movie-info">
                <p className='release'>{formatDate(movieObj.release_date)}</p>
                <div className='title-overview'>
                    <h2>{movieObj.title}</h2>
                    <p>{limitWords(movieObj.overview)}</p>
                </div>
                <p className='rating'>{formatRating(movieObj.vote_average)}</p>
                <Link className='link' to={`/movie/${movieObj.id}`}>More Info</Link>
                <FavButton movieObj={movieObj} removeFromFavorites={removeFromFavorites}/>
            </div>
        </div>
    )
}

export default MovieCard;
