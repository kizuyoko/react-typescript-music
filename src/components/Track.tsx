import { Music } from '../util/MusicType';

interface TrackProps {
  track: Music; 
  isRemoval: boolean;
  onAdd?: (track: Music) => void;
  onRemove?: (track: Music) => void;
}

function Track(props:TrackProps) {
  function renderAction(props: TrackProps) {
    return (
      <button 
        className="w-10 px-2 py-0 ml-2 text-4xl font-bold text-white rounded bg-cyan-500 hover:opacity-80"
        onClick={() => {
          if (props.onAdd) {
            props.onAdd(props.track);
          } else if (props.onRemove){
            props.onRemove(props.track);
          }
        }}
      >
        {props.isRemoval ? "-" : "+"}
      </button>
    )
  }

  return (
    <article className="flex items-center py-4 animate-fade-up">
      <div className='grow'>
        <h3 className='text-lg font-bold text-violet-700'>{props.track.name}</h3> 
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
