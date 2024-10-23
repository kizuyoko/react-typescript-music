import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../icons';

interface SearchBarProps {
  onSearch: (searchText: string) => void;
  instructOpen: () => void;
  instructClose: () => void;
}


function SearchBar(props: SearchBarProps) {
  const [searchText, setSearchText] = useState("");
  const [buttonText, setButtonText] = useState('?');
  const [buttonTitle, setButtonTilte] = useState("How to use this app?")

  function onSearchHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    props.onSearch(searchText);
  }

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(event.currentTarget.value);
  }
  
  function instructionToggle() {
    const isQuestionMark = buttonText === '?';
    setButtonText(isQuestionMark ? 'X' : '?');
    setButtonTilte(isQuestionMark ? 'Close the instruction' : 'How to use this app?');
    isQuestionMark ? props.instructOpen() : props.instructClose();
  }

  return (
    <form 
      className="flex items-center p-4 pl-2 md:px-0" 
      onSubmit={onSearchHandler}
    > 
      <span 
        className="flex items-center justify-center w-8 h-8 mr-2 text-xl font-bold text-white rounded-full cursor-pointer bg-sky-600 hover:opacity-80"
        title={buttonTitle}
        onClick={instructionToggle}
      >{buttonText}</span>
      <input 
        id="searchText"
        name="searchText"
        value={searchText}
        type="text"
        aria-label="Search a Song"
        className="border border-slate-400 rounded-tl-[12px] p-2 px-4  focus:outline-none focus:border-slate-600 h-11 max-[410px]:w-[164px]"
        onChange={onChangeHandler}
        placeholder="Search a Song"
      />
      <button className=" bg-violet-600 hover:opacity-80 text-white rounded-br-[12px] px-2 py-1 font-medium h-11">
        Search <span className="hidden text-lg md:inline"><FontAwesomeIcon icon="search" /></span>
      </button>
    </form>
   )
}

export default SearchBar
