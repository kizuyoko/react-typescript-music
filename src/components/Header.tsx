import SearchBar from "./SearchBar";

function Header() {

  return (
    <header className="bg-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between"> 
        <h1 className="p-4 text-xl">React 🎵 TypeScript 🎵 Music</h1>
        <SearchBar /> 
      </div>
    </header>
  )
}

export default Header;
