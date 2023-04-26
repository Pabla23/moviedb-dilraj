// Page - Contact
import { appTitle } from '../globals/globals';

const PageFavourites = () => {

	document.title = `Favorites - ${appTitle}`;

	return (
    	<section className='favourites'>
			<h2>No movies have been added to favourites.</h2>
			<p>To add a movie to favourites, hover over a movie and click on the heart. When the heart turns red, it means the movie has been favourited!</p>
		</section>
	);

};

export default PageFavourites;