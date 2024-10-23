import { useState } from "react";
import SearchBar  from "./SearchBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../icons';

interface HeaderProps {
  onSearch: (searchText: string) => void;
}

function Header(props: HeaderProps)  {
  const [showInstructor, setShowInstructor] = useState(false);

  function instructOpenHandler() {
    setShowInstructor(true);  
  }
  function instructCloseHandler() {
    setShowInstructor(false);  
  }

  return (
    <header className="border-b border-gray-300 shadow-sm bg-gradient-to-b from-white to-violet-50 animate-fade-down">
      <div className="container flex flex-col items-center mx-auto md:flex-row md:justify-between "> 
        <h1 className="text-cyan-700 pt-4 px-6 md:px-0 pb-0 md:pt-0 text-xl font-bold max-[380px]:text-[18px] max-[380px]:px-4">React <FontAwesomeIcon icon="music" /> TypeScript <FontAwesomeIcon icon="music" /> Music</h1>
        <SearchBar 
          onSearch={props.onSearch}
          instructOpen={instructOpenHandler}
          instructClose={instructCloseHandler}
        /> 
      </div>
      {
        showInstructor ? 
          <aside className="container mx-auto mb-6 animate-fade-up">
            <div className="flex flex-col px-6">
              <div>
                <h4 className="pb-1 text-lg font-medium">Instruction:</h4>
                <ul className="pl-5 list-decimal">
                  <li>Search for your favorite songs or artists using the search bar above. (You may need to log in to Spotify.)</li>
                  <li>Click the plus (+) button next to each track in the search results to add them to your playlist.</li>
                  <li>Enter a playlist name in the field on the right side.</li>
                  <li>Click 'Save Playlist' to save the tracks to your Spotify account.</li>
                  <li>Check your Spotify account to view your newly created playlist.</li>
                </ul>
              </div>
            </div>
          </aside> : null
      }
    </header>
  )
}

export default Header;
