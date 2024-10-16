import { useState } from "react";
import Tracklist from "./Tracklist";
import { Music } from "../util/MusicType";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../icons';

function Playlist(props: {playlist: Music[], onAdd: ()=>void, playlistName: string}) {
  const [playlistText, setPlaylistText] = useState("");

  function playlistSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPlaylistText(event.currentTarget.value);
  }

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setPlaylistText(event.currentTarget.value);
  }

  return (
    <form onSubmit={playlistSubmitHandler}>
      <div className="flex flex-col lg:flex-row bg-sky-600  py-4 px-6 pb-3 rounded-tl-[24px]">
        <h2 className="grow text-white text-2xl font-semibold"><FontAwesomeIcon icon="play" className="mr-2" />{props.playlistName}</h2>
        <input 
          id="playlist"
          name="playlist"
          value={playlistText}
          aria-label="Search in Playlist"
          type="text"
          className="rounded focus:outline-none border focus:border-slate-800 my-1 lg:my-0 text-lg py-1 px-4"
          onChange={onChangeHandler}
        />
      </div>
      <Tracklist 
        list={props.playlist} 
        isRemoval={true}
        onAdd={props.onAdd}
      />
      <button className="text-white round-half-small p-2 bg-violet-600 hover:opacity-80 mt-2 w-full text-xl font-medium rounded-br-[24px]">Save the Song <FontAwesomeIcon icon="floppy-disk" className="ml-2" /></button>
    </form>
  )
}

export default Playlist;
