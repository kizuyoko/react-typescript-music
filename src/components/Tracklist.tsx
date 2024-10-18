import Track from "./Track";
import { Music } from "../util/MusicType";

function Tracklist(props: { list: Music[], isRemoval: boolean, onAdd: (track: Music) => void }) {

  return (
    <div className="divide-y px-6">
      {
        props.list.map((track) => (
            <Track 
              track={track} 
              key={track.id}
              isRemoval={props.isRemoval}
              onAdd={props.onAdd}
            />
          )
        )
      }
    </div>
  )
}

export default Tracklist;
