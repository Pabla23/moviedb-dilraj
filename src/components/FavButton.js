import { ReactComponent as Heart } from "../svgs/heart.svg";
import { useState, useEffect } from "react";

function FavButton({ movieObj, removeFromFavorites }) {
  
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favourites')) || [];
    setIsFav(favorites.some((movie) => movie.id === movieObj.id));
  }, [movieObj.id]);

  function handleAddFav() {
    // Check if the movie is already in the favourites list... avoid duplicates
    if (!isFav) {
      const favs = JSON.parse(localStorage.getItem('favourites')) || [];
      const newFavs = [...favs, movieObj];
      localStorage.setItem('favourites', JSON.stringify(newFavs));
      setIsFav(true);
    }
  }
  
  function handleRemoveFav() {
    // Remove the movie from the favourites list
    const favs = JSON.parse(localStorage.getItem('favourites')) || [];
    const newFavs = favs.filter((movie) => movie.id !== movieObj.id);
    localStorage.setItem('favourites', JSON.stringify(newFavs));
    setIsFav(false);

    // If we are on the favourites page, remove the movie from the "favourites display" list instantly
    if (window.location.pathname === '/favourites') {
      removeFromFavorites(movieObj.id);
    }
  }

  // used 2 different buttons to separate add and remove favs
  return (
    <>
      {!isFav ? (
        <button onClick={handleAddFav}>
          <Heart className="fav-btn" />
        </button>
      ) : (
        <button onClick={handleRemoveFav}>
          <Heart className="fav-btn red" />
        </button>
      )}
    </>
  );
}

export default FavButton;