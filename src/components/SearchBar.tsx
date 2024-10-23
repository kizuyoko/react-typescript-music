import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../icons';

export interface SearchBarProps {
  onSearch: (searchText: string) => void;
}


function SearchBar(props: SearchBarProps) {
  const [searchText, setSearchText] = useState("");

  function onSearchHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    props.onSearch(searchText);
  }

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(event.currentTarget.value);
  }

  return (
    <form 
      className="flex items-center p-4 md:px-0" 
      onSubmit={onSearchHandler}
    >
      <input 
        id="searchText"
        name="searchText"
        value={searchText}
        type="text"
        aria-label="Search a Song"
        className="border border-slate-400 rounded-tl-[12px] p-2 px-4 lg:w-[500px] focus:outline-none focus:border-slate-600 h-11 max-[360px]:w-full"
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
