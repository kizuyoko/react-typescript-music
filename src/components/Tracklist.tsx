import Track from "./Track";
import { Music } from "../util/MusicType";

function Tracklist(props: { list: Music[] }) {

  return (
    <div className="divide-y px-6">
      {
        props.list.length === 0 ? (
          <p className="py-6">No tracks found. Try using the search box in the top-right corner to find your favorite music.</p>
        ) : (
          props.list.map((track) => {
            return ( 
              <Track 
                track={track} 
                key={track.id}
                isRemoval={false} 
              />
            );
          })
        )
      }
    </div>
  )
}

export default Tracklist;
