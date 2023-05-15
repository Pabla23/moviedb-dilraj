// Page - Favs
import { appTitle } from '../globals/globals';
import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

const PageFavourites = () => {

  const [favMovies, setFavMovies] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favourites')) || [];
    setFavMovies(favs);
  }, []);
  
  // Remove movie from favourites list as soon as the "remove" button is clicked... instead of having to refresh the page
  function removeFromFavorites(movieId) {
    setFavMovies(favMovies.filter(movie => movie.id !== movieId));
  }

  document.title = `Favorites - ${appTitle}`;

  return (
    <section className='favourites'>
      {favMovies.length === 0 ? (
		<div className='no-favs'>
			<h1>No Movies Have Been Added to Favourites</h1>
			<p>To add a movie to favourites, hover over a movie and click on the heart. When the heart turns red, it means the movie has been favourited! Then, come back here and you'll see all of your favourites</p>
		</div>
      ) : (
		<div>
			<h1 className='fav-title'>Favourites</h1>
			<div className='movies'>
				{favMovies.map((movie) => <MovieCard key={movie.id} movieObj={movie} removeFromFavorites={removeFromFavorites}/>)}
			</div>
		</div>
      )}
    </section>
  );
};

export default PageFavourites;