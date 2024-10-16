import Track from "./Track";
import { Music } from "../util/MusicType";

function Tracklist(props: { list: Music[] }) {

  return (
    <div className="divide-y px-6">
      {
        props.list.map((track) => {
          return ( 
            <Track 
              track={track} 
              key={track.id}
              isRemoval={false} 
            />
          );
        })
      }
    </div>
  )
}

export default Tracklist;
