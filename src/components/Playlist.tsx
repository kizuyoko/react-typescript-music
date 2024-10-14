import { useState } from "react";
import Tracklist from "./Tracklist";

function Playlist() {
  const [playlist, setPlaylist] = useState("");

  function playlistSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPlaylist(event.currentTarget.value);
  }

  return (
    <form onSubmit={playlistSubmitHandler}>
      <h2>Playlist</h2>
      <input 
        id="playlist"
        name="playlist"
        value={playlist}
        type="text"
        className="border border-slate-400 rounded p-1"
      />
      <Tracklist />
      <button className="bg-blue-500 text-white rounded px-2 py-1 hover:bg-blue-600 ml-2">
        Save
      </button>
    </form>
  )
}

export default Playlist;
