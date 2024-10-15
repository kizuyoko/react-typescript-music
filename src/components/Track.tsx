import React from 'react';
import { Music } from '../util/MusicType';

interface TrackProps {
  track: Music; 
  isRemoval: boolean;
}

const Track: React.FC<TrackProps> = ({ track, isRemoval }) => {
  type ActionProps = {
    isRemoval: boolean;
  };

  function renderAction(props: ActionProps) {
    return (
      <button className="bg-violet-500 text-white rounded px-2 py-1 hover:bg-violet-600 ml-2">
        {props.isRemoval ? "Remove" : "Add"}
      </button>
    )
  }

  return (
    <article className="border border-r-0 border-b-0 border-l-0 border-slate-400 py-2 mt-1 flex items-center ">
      <div className='grow'>
        <h3 className='text-lg text-violet-700 font-bold'>{track.name}</h3> 
        <p>{track.artist}</p>
      </div>
      <div>
        {renderAction({ isRemoval })}
      </div>
      </article>  
  )
}

export default Track;
