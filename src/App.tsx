import Header from "./components/Header";
import Playlist from "./components/Playlist";
import SearchResults from "./components/SearchResults";
import { DUMMYDATA } from "./util/dummy_data";

function App() {

  return (
    <>
      <Header />
      <main className="container mx-auto flex flex-col md:flex-row md:p-0 justify-between">
        <section className="flex-1 md:w-1/2 p-6 m-4 md:m-2 md:mt-4 md:ml-0 rounded-tl-[24px] rounded-br-[24px] border border-slate-300 shadow-lg  animate-fade-right">
          <SearchResults searchResults={DUMMYDATA} />
        </section>
        <section className="flex-1 md:w-1/2 p-6 m-4 mt-0 md:m-2 md:mt-4 md:mr-0 rounded-tl-[24px] rounded-br-[24px] border border-slate-300 shadow-lg  animate-fade-left">
          <Playlist playlist={DUMMYDATA} />
        </section>
      </main>
    </>
  )
}

export default App
