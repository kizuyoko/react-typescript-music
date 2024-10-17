import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../icons';

function Footer() {

  return (
    <footer className="container py-6 px-1 pt-0 mx-auto flex justify-center items-center md:justify-end md:items-end text-sky-800 text-3xl animate-fade-up">
      <a href="https://github.com/kizuyoko/react-typescript-music" target="_blank" className="hover:opacity-70">
        <FontAwesomeIcon icon={['fab', 'github']} className="mr-2" aria-label="GitHub" />
        <span className="sr-only">GitHub</span>
      </a>
      <a href="https://www.linkedin.com/in/kizuyoko/" target="_blank" className="hover:opacity-70">
        <FontAwesomeIcon icon={['fab', 'linkedin']} aria-label="LinkedIn" />
        <span className="sr-only">LinkedIn</span>
      </a>      
    </footer>
  )
}

export default Footer;

