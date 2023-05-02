// Footer
import {author, currentYear} from '../globals/globals';
import {ReactComponent as Logo} from '../svgs/dblogo.svg';

const Footer = () => {
    return (
        <footer>
            <p>&copy; {currentYear} {author}</p>
            <Logo/>
        </footer>
    );
}

export default Footer;