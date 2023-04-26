// Page - Home
import { Link } from 'react-router-dom';
import { appTitle } from '../globals/globals';

const PageHome = () => {

    document.title = `${appTitle}`;

    return (
        <section>
            <h2>Home Page</h2>
            <h2><Link to="/movie">View Movie</Link></h2>
        </section>
    );

};

export default PageHome;