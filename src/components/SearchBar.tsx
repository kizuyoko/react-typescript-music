import { useState } from "react";

function SearchBar() {
  const [searchText, setSearchText] = useState("");

  function onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSearchText(event.currentTarget.value);
  }

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(event.currentTarget.value);
  }

  return (
    <form 
      className="flex items-center px-6 py-4" 
      onSubmit={onSubmitHandler}
    >
      <input 
        id="searchText"
        name="searchText"
        value={searchText}
        type="text" 
        className="border border-slate-400 rounded-tl-[12px] p-2 px-4 lg:w-[500px] focus:outline-none focus:border-slate-600 h-11"
        onChange={onChangeHandler}
      />
      <button className=" bg-violet-500 hover:opacity-80 text-white rounded-br-[12px] px-2 py-1 font-medium h-11">
        <span className="hidden md:inline text-lg">Search</span> 🔎
      </button>
    </form>
  )
}

export default SearchBar
