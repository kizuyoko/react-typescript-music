import SearchBar from "./SearchBar";

function Header() {

  return (
    <header className="bg-gradient-to-b from-white to-violet-50 border-b border-gray-300 shadow-sm  animate-fade-down">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between "> 
        <h1 className="pt-4 px-6 pb-0 md:pt-0 text-xl font-bold max-[380px]:text-[16px]">React 🎵 TypeScript 🎵 Music</h1>
        <SearchBar /> 
      </div>
    </header>
  )
}

export default Header;
