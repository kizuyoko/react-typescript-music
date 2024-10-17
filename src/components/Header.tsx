import SearchBar, {SearchBarProps}  from "./SearchBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../icons';

function Header(props: SearchBarProps)  {

  return (
    <header className="bg-gradient-to-b from-white to-violet-50 border-b border-gray-300 shadow-sm animate-fade-down">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between "> 
        <h1 className="text-cyan-700 pt-4 px-6 md:px-0 pb-0 md:pt-0 text-xl font-bold max-[380px]:text-[18px] max-[380px]:px-4">React <FontAwesomeIcon icon="music" /> TypeScript <FontAwesomeIcon icon="music" /> Music</h1>
        <SearchBar onSearch={props.onSearch} /> 
      </div>
    </header>
  )
}

export default Header;
