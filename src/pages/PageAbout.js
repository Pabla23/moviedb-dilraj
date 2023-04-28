// Page - About
import { appTitle } from '../globals/globals';
import { ReactComponent as Logo } from '../svgs/TMDB.svg';

const PageAbout = () => {

	document.title = `About - ${appTitle}`;

	return (
		<section className='about-us'>
			<h2>Welcome to The Blockbuster Movie Vault!</h2>
			<p>The Blockbuster Movie Vault is a website where you can find the most popular, top rated, upcoming, and now playing movies. Browse for your favourite movies and check out their ratings.</p>
			<p>Found something you like? Add them to your favourites and remove them anytime.</p>
			<p className='tmdb'>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
			<Logo/>
		</section>
	);
};

export default PageAbout;