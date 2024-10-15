import Track from "./Track";
import { Music } from "../util/MusicType";

function Tracklist(props: { list: Music[] }) {

  return (
    ( 
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
  )
}

export default Tracklist;
