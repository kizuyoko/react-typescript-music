import Header from "./components/Header";
import Playlist from "./components/Playlist";
import SearchResults from "./components/SearchResults";

function App() {

  return (
    <>
      <Header />
      <main className="container mx-auto flex flex-col md:flex-row md:p-0">
        <section className="flex-1 md:w-1/2 p-4">
          <SearchResults />
        </section>
        <section className="flex-1 md:w-1/2 p-4">
          <Playlist />
        </section>
      </main>
    </>
  )
}

export default App
