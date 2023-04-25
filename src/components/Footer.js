// Footer
import {author, currentYear} from '../globals/globals';


const Footer = () => {
    return (
        <footer>
            <p>&copy; {currentYear} {author}</p>
        </footer>
    );
}

export default Footer;