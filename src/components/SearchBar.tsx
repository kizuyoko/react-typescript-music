import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../icons';

function SearchBar() {
  const [searchText, setSearchText] = useState("");

  function onSearchHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSearchText(event.currentTarget.value);
  }

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(event.currentTarget.value);
  }

  return (
    <form 
      className="flex items-center md:px-6 p-4" 
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
      />
      <button className=" bg-violet-600 hover:opacity-80 text-white rounded-br-[12px] px-2 py-1 font-medium h-11">
        Search <span className="hidden md:inline text-lg"><FontAwesomeIcon icon="search" /></span>
      </button>
    </form>
  )
}

export default SearchBar
