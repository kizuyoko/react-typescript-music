import Footer from "./components/Footer";
import Header from "./components/Header";
import Playlist from "./components/Playlist";
import SearchResults from "./components/SearchResults";
import { DUMMYDATA } from "./util/dummy_data";

function App() {

  return (
    <>
      <Header />
      <main className="container mx-auto flex flex-col md:flex-row md:p-0 justify-between">
        <section className="round-half-big md:ml-0  animate-fade-right">
          <SearchResults searchResults={DUMMYDATA} />
        </section>
        <section className="round-half-big md:mr-0 animate-fade-left">
          <Playlist playlist={DUMMYDATA} />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
