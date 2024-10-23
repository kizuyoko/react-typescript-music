import { useState } from "react";
import Tracklist from "./Tracklist";
import { Music } from "../util/MusicType";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../icons';
interface PlaylistProps {
  playlist: Music[];
  playlistName: string;
  onRemove: (track: Music) => void;
  onRename: (playlistText: string) => void;
  onAddPlaylist: () => void;
  loading: boolean;
}

function Playlist(props: PlaylistProps) {
  const [playlistTitle, setPlaylistTitle] = useState('');
 
  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const newTitle = event.currentTarget.value
    setPlaylistTitle(newTitle);
    props.onRename(newTitle);
  }

  function onAddPlaylistHandler(event: React.FormEvent){
    event.preventDefault()
    props.onAddPlaylist();
    setPlaylistTitle('');
  }

  return (
    <form className="flex flex-col h-full">
      <div className="flex flex-col lg:flex-row bg-sky-600  py-4 px-6 pb-3 rounded-tl-[24px] lg:items-center">
        <h2 className="text-2xl font-semibold text-white grow "><FontAwesomeIcon icon="play" className="mr-2" />{props.playlistName}</h2>
        <input 
          aria-label="Playlist"
          type="text"
          className="px-4 py-1 my-1 text-lg border rounded grow focus:outline-none focus:border-slate-800 lg:my-0"
          onChange={onChangeHandler}
          value={playlistTitle}
          placeholder="Type the name of Playlist"
        />
      </div>
      { props.loading ? (
        <div className="loading-screen">
          <p className="p-6">Saving your playlist...</p>
        </div>
      ) : ''}
      {
        props.playlist.length >= 1 ? (
          <div>
            <Tracklist 
              list={props.playlist} 
              isRemoval={true}
              onRemove={props.onRemove}
            />
          </div>
        ) : <h3 className="p-6">No track in the Playlist.</h3>
      }
      {
        props.playlist.length >= 1 && playlistTitle ? (
          <button 
            onClick={onAddPlaylistHandler}
            className="p-2 m-2 mx-6 mb-6 text-xl font-medium text-white rounded bg-violet-600 hover:opacity-80"
          >
            Save the Song 
            <FontAwesomeIcon icon="floppy-disk" className="ml-2" />
          </button>
        ) : null
      } 
    </form>
  )
}

export default Playlist;
