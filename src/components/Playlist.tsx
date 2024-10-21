import Tracklist from "./Tracklist";
import { Music } from "../util/MusicType";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../icons';
interface PlaylistProps {
  playlist: Music[];
  playlistName: string;
  onRemove: (track: Music) => void;
  onRename: (playlistText: string) => void;
}

function Playlist(props: PlaylistProps) {
  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    props.onRename(event.currentTarget.value);
  }

  return (
    <form className="flex flex-col h-full">
      <div className="flex flex-col lg:flex-row bg-sky-600  py-4 px-6 pb-3 rounded-tl-[24px]">
        <h2 className="grow text-white text-2xl font-semibold"><FontAwesomeIcon icon="play" className="mr-2" />{props.playlistName}</h2>
        <input 
          aria-label="Playlist"
          type="text"
          className="rounded focus:outline-none border focus:border-slate-800 my-1 lg:my-0 text-lg py-1 px-4"
          onChange={onChangeHandler}
        />
      </div>
      
      {
        props.playlist.length >= 1 ? (<>
          <div className="grow">
            <Tracklist 
              list={props.playlist} 
              isRemoval={true}
              onRemove={props.onRemove}
            />
          </div>
          <button className="text-white round-half-small p-2 bg-violet-600 hover:opacity-80 mt-2 w-full text-xl font-medium rounded-br-[24px]">
            Save the Song 
            <FontAwesomeIcon icon="floppy-disk" className="ml-2" />
          </button>
        </>) : <h3 className="p-6">No track in the Playlist.</h3>
          
      }
    </form>
  )
}

export default Playlist;
