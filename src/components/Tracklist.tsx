import Track from "./Track";
import { Music } from "../util/MusicType";


interface TracklistProps {
  list: Music[], 
  isRemoval: boolean, 
  onAdd?: (track: Music) => void, 
  onRemove?: (track: Music)  => void
}

function Tracklist(props: TracklistProps) {

  return (
    <div className="divide-y px-6">
      {
        props.list.map((track) => (
            <Track 
              track={track} 
              key={track.id}
              isRemoval={props.isRemoval}
              onAdd={props.onAdd}
              onRemove={props.onRemove}
            />
          )
        )
      }
    </div>
  )
}

export default Tracklist;
