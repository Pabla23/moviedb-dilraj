import noPoster from '../images/no-movie-poster.jpg';
import FavButton from './FavButton';

function SingleMovie({ movieObj }) {

    function formatDate(string) {
        const date = new Date(string);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString([], options);
    }

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

    function convertToHours(totalMinutes) {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
      
        return (hours + "h " + minutes + "m");
      }

    return (
        <div className="single-movie">
            <div className="single-content">
                <div className="single-poster-wrapper">
                {movieObj.poster_path === null ? 
                    <img src={noPoster} alt="No poster" /> : 
                    <div className='single-poster'>
                        <img className='mobile' src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`} alt={movieObj.title} />
                        <img className='desktop' src={`https://image.tmdb.org/t/p/w1280/${movieObj.backdrop_path}`} alt={movieObj.title} />
                    </div>
                }
                </div>
                <div className="single-movie-info">
                    <h2>{movieObj.title}</h2>
                    <p>{movieObj.overview}</p>
                    <FavButton movieObj={movieObj}/>
                    <div className='single-rating'>{formatRating(movieObj.vote_average)}</div>
                    <div className='other-info'>
                        <p>{convertToHours(movieObj.runtime)}</p>
                        <p>{formatDate(movieObj.release_date)}</p>
                        {movieObj.genres && (<p>{movieObj.genres.map((genre) => genre.name).join(', ')}</p>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleMovie;
