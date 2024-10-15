import { useState } from "react";
import Tracklist from "./Tracklist";
import { Music } from "../util/MusicType";

function Playlist(props: {playlist: Music[]}) {
  const [playlist, setPlaylist] = useState("");

  function playlistSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPlaylist(event.currentTarget.value);
  }

  return (
    <form onSubmit={playlistSubmitHandler}>
      <div className="flex pb-2">
        <h2 className="grow text-2xl text-gray-700 font-semibold">Playlist 🎶</h2>
        <input 
          id="playlist"
          name="playlist"
          value={playlist}
          type="text"
          className="border border-slate-400 rounded p-1"
        />
      </div>
      <Tracklist list={props.playlist} />

      <button className="text-white rounded p-2 bg-cyan-500 hover:bg-cyan-400 mt-2 w-full text-lg font-medium">
        Save the Music 💾
      </button>
    </form>
  )
}

export default Playlist;
