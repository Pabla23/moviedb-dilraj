// Page - Home

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { appTitle } from '../globals/globals';

const PageHome = () => {

    useEffect(() => {
		document.title = `${appTitle} - Home`;
	}, []);

    return (
        <section>
            <h2>Home Page</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit porro, dolorem, quod facere enim voluptate provident quo labore vero repellat nemo animi ad exercitationem rem quos, possimus libero deleniti laudantium?</p>
            <h2><Link to="/movie">View Movie</Link></h2>
        </section>
    );

};

export default PageHome;