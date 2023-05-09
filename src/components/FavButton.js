import { ReactComponent as Heart } from "../svgs/heart.svg";
import { useState, useEffect } from "react";

function FavButton({ movieObj, removeFromFavorites }) {
  
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favourites')) || [];
    setIsFav(favorites.some((movie) => movie.id === movieObj.id));
  }, [movieObj.id]);

  function handleAddFav() {
    const storedFavs = localStorage.getItem('favourites');
    const favs = storedFavs ? JSON.parse(storedFavs) : [];
    
    if (!favs.find(fav => fav.id === movieObj.id)) {
      favs.push(movieObj);
      localStorage.setItem('favourites', JSON.stringify(favs));
      setIsFav(true);
    }
  }
  
  function handleRemoveFav() {
    const storedFavs = localStorage.getItem('favourites');
    const favs = storedFavs ? JSON.parse(storedFavs) : [];
    
    const newFavs = favs.filter(fav => fav.id !== movieObj.id);
    localStorage.setItem('favourites', JSON.stringify(newFavs));
    setIsFav(false);
    if (window.location.pathname === '/favourites') {
      removeFromFavorites(movieObj.id);
    }
  }

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