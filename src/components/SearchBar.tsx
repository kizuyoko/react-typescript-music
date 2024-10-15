import { useState } from "react";

function SearchBar() {
  const [searchText, setSearchText] = useState("");

  function onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSearchText(event.currentTarget.value);
  }

  return (
    <form 
      className="flex items-center p-6" 
      onSubmit={onSubmitHandler}
    >
      <input 
        id="searchText"
        name="searchText"
        value={searchText}
        type="text" 
        className="border border-slate-400 round-half-small p-1 lg:w-[460px]"
      />
      <button className=" bg-violet-500 hover:opacity-80 text-white round-half-small
     px-4 py-1 font-medium ml-2">
        Search 🔎
      </button>
    </form>
  )
}

export default SearchBar
