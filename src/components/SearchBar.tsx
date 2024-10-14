import { useState } from "react";

function SearchBar() {
  const [searchText, setSearchText] = useState("");

  function onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSearchText(event.currentTarget.value);
  }

  return (
    <form 
      className="flex items-center p-4" 
      onSubmit={onSubmitHandler}
    >
      <input 
        id="searchText"
        name="searchText"
        value={searchText}
        type="text" 
        className="border border-slate-400 rounded p-1"
      />
      <button className="bg-blue-500 text-white rounded px-2 py-1 hover:bg-blue-600 ml-2">
        Search
      </button>
    </form>
  )
}

export default SearchBar
