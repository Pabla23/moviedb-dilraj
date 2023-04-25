// Page - Contact

import { useEffect } from 'react';
import { appTitle } from '../globals/globals';

const PageFavourites = () => {

	useEffect(() => {
		document.title = `${appTitle} - Favorites`;
	}, []);

	return (
    	<section>
			<h2>The Favourites Page</h2>
		</section>
	);

};

export default PageFavourites;