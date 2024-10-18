import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Playlist from "./components/Playlist";
import SearchResults from "./components/SearchResults";
import { DUMMYDATA } from "./util/dummy_data";
import { Music } from "./util/MusicType";

function App() {
  const [searchResult, setSearchResult] = useState<Music[]>([]);
  const [playlistName, setPlaylistName] = useState("Playlist Name will come here.");
  const [playlistSongs, setPlaylistSongs] = useState<Music[]>(DUMMYDATA);

  function addTrack(track: Music) {
    const songExist = playlistSongs.find(item => item.id === track.id);
    const newList = playlistSongs.concat(track);
    if (songExist) {
      console.log('There is already, nothing to do');
      return;
    } else {
      setPlaylistSongs(newList);
      setPlaylistName("Your Playlist: ")
    }
  }

  function addTrackP() {
    console.log('I am addTruckP')
  }

  function searchListHandler(searchText: string) {
    const searchWord = searchText.toLowerCase();
    const newResult = DUMMYDATA.filter((song) => 
      song.name.toLowerCase().includes(searchWord) ||
      song.artist.toLowerCase().includes(searchWord) ||
      song.album.toLowerCase().includes(searchWord)
    );
    setSearchResult(newResult);
  }

 

  return (
    <>
      <Header onSearch={searchListHandler} />
      <main className="container mx-auto flex flex-col md:flex-row md:p-0 justify-between">
        <section className="round-half-big md:ml-0  animate-fade-right">
          <SearchResults 
            searchResults={searchResult} 
            onAdd={addTrack}
          />
        </section>
        <section className="round-half-big md:mr-0 animate-fade-left">
          <Playlist 
            playlist={playlistSongs} 
            playlistName={playlistName}
            onAdd={addTrackP}
          />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
