import { Music } from "../util/MusicType"
import Tracklist from "./Tracklist"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../icons';

interface SearchResultsProps { 
  searchResults: Music[], 
  onAdd: (track: Music) => void,
  noTrackText: string,
}

function SearchResults(props: SearchResultsProps) {
  return (
    <>
      <h2 className="bg-sky-600 text-white text-2xl py-4 px-6 font-semibold rounded-tl-[24px]"><FontAwesomeIcon icon="list" className="mr-2" /> Search Result </h2>
      {
        props.searchResults.length >= 1 ? (
          <Tracklist 
            list={props.searchResults}
            onAdd={props.onAdd}
            isRemoval={false}
          />
        ) : <p className="p-6">{props.noTrackText}</p>
      }
    </>
  )
}

export default SearchResults
