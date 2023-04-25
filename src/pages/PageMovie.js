import { useEffect } from 'react';
import { appTitle } from '../globals/globals';

const PageAbout = () => {

	useEffect(() => {
		document.title = `${appTitle} - Movie`;
	}, []);

	return (
		<section>
			<h2>Movie Page</h2>
			<p>Movie details will be here</p>
		</section>
	);
	
};

export default PageAbout;