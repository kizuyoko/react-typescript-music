import { Music } from '../util/MusicType';

interface TrackProps {
  track: Music; 
  isRemoval: boolean;
  onAdd?: (track: Music) => void;
}

function Track(props:TrackProps) {
  type ActionProps = {
    isRemoval: boolean;
  };

  function renderAction(props: ActionProps) {
    return (
      <button className="bg-cyan-500 text-white font-bold text-4xl rounded px-2 py-0 hover:opacity-80 ml-2 w-10">
        {props.isRemoval ? "-" : "+"}
      </button>
    )
  }

  return (
    <article className="flex items-center py-4">
      <div className='grow'>
        <h3 className='text-lg text-violet-700 font-bold'>{props.track.name}</h3> 
        <p>Artist: {props.track.artist}</p>
        <p>Album: {props.track.album}</p>
      </div>
      <div>
        {renderAction(props)}
      </div>
      </article>  
  )
}

export default Track;
