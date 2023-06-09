import MovieCard from "./MovieCard";

function Movies ( {movieData} ) {

  return (
    <div className="movies">
        {movieData.map((oneMovie, i) => <MovieCard key={i} movieObj={oneMovie}/>)}
    </div>
  )
}

export default Movies;