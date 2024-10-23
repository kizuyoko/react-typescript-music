import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Playlist from "./components/Playlist";
import SearchResults from "./components/SearchResults";
// import { DUMMYDATA } from "./util/dummy_data";
import { Music } from "./util/MusicType";
import Spotify from "./util/Spotify";

function App() {
  const [searchResult, setSearchResult] = useState<Music[]>([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistSongs, setPlaylistSongs] = useState<Music[]>([]);
  const [loading, setLoading] = useState(false);
  const [noTrackText, setNoTrackText] = useState('No track yet. Search a track in the search field.')

  async function search(term: string) {
    const result = await Spotify.search(term); 
    const filteredResult = result.filter((track: Music) => track.name && track.artist);
    setNoTrackText('No track found.')
    setSearchResult(filteredResult);
  }

  function addTrack(track: Music) {
    const songExist = playlistSongs.find(item => item.id === track.id);
    if (songExist) {
      return;
    } else {
      const newList = searchResult.filter((item: Music) => item.id !== track.id);
      setSearchResult(newList);
      setPlaylistSongs(prevSongs => [...prevSongs, track]);
      setPlaylistName("Your Playlist: ")
    }
  }

  function removeTrack(track: Music) {
    setPlaylistSongs((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }

  /*
  function searchListHandler(searchText: string) {
    const searchWord = searchText.toLowerCase();
    const newResult = DUMMYDATA.filter((song) => 
      song.name.toLowerCase().includes(searchWord) ||
      song.artist.toLowerCase().includes(searchWord) ||
      song.album.toLowerCase().includes(searchWord)
    );
    setSearchResult(newResult);
  }
  */

  function renamePlaylistHandler(playlistText: string) {
    setPlaylistName(playlistText)
  }

  async function saveListHandler() {
    //console.log(playlistName);
    //console.log(playlistSongs)
 
    const trackUris = playlistSongs.map(track => track.uri); 
    
    console.log('Track URIs:', trackUris);
    
    if (trackUris.length === 0) {
      console.error('No tracks to save.');
      return;
    }

    setLoading(true); // Set loading to true when saving starts

    try {
      await Spotify.savePlaylist(playlistName, trackUris);
      setPlaylistName("Next Playlist");
      setPlaylistSongs([]); // Clear the playlist after saving
    } catch (error) {
      console.error('Error saving playlist:', error);
    } finally {
      setLoading(false); // Set loading to false when saving ends
    }
  }
 
  return (
    <>
      <Header onSearch={search} />
      <main className="container flex flex-col justify-between mx-auto md:flex-row md:p-0">
        <section className="round-half-big md:ml-0 animate-fade-right">
          <SearchResults 
            searchResults={searchResult} 
            onAdd={addTrack}
            noTrackText={noTrackText}
          />
        </section>
        <section className="round-half-big md:mr-0 animate-fade-left">
          <Playlist 
            playlist={playlistSongs} 
            playlistName={playlistName}
            onRemove={removeTrack}
            onRename={renamePlaylistHandler}
            onAddPlaylist={saveListHandler}
            loading={loading}
          />          
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
