import SearchBar from "./SearchBar";

function Header() {

  return (
    <header className="bg-slate-50 border-b border-gray-300 shadow-md  animate-fade-down">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between "> 
        <h1 className="p-6 pb-0 md:pb-6 text-lg font-bold">React 🎵 TypeScript 🎵 Music</h1>
        <SearchBar /> 
      </div>
    </header>
  )
}

export default Header;
