import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';
import { ReactComponent as Heart } from '../svgs/heart.svg';

function MovieCard({ movieObj }) {

    function limitWords(string) {
        const words = string.split(' ');
        if (words.length <= 25) {
          return string;
        }
        return words.slice(0, 25).join(' ') + '...';
      }

    function formatDate(string) {
        const date = new Date(string);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString([], options);
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
                    <h3>{movieObj.title}</h3>
                    <p>{limitWords(movieObj.overview)}</p>
                </div>
                <p className='rating'>{movieObj.vote_average} / 10</p>
                <Link className='link' to={`/movie/${movieObj.id}`}>More Info</Link>
                <Heart className='fav-btn'/>
            </div>
        </div>
    )
}

export default MovieCard;
