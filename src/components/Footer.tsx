import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../icons';

function Footer() {

  return (
    <footer className="container p-6 pt-0 mx-auto flex justify-center items-center md:justify-end md:items-end text-sky-800 text-3xl">
      <a href="https://github.com/kizuyoko/react-typescript-music" target="_blank" className="hover:opacity-70">
        <FontAwesomeIcon icon={['fab', 'github']} className="mr-2" />
      </a>
      <a href="https://www.linkedin.com/in/kizuyoko/" target="_blank" className="hover:opacity-70"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>      
    </footer>
  )
}

export default Footer;

