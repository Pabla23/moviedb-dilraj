import { appTitle } from '../globals/globals';

const PageAbout = () => {

	document.title = `Movie - ${appTitle}`;

	return (
		<section>
			<h2>Movie Page</h2>
			<p>Movie details will be here</p>
		</section>
	);
	
};

export default PageAbout;