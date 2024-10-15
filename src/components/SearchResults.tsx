import { Music } from "../util/MusicType"
import Tracklist from "./Tracklist"

function SearchResults(props: { searchResults: Music[] }) {

  return (
    <>
      <h2 className="text-2xl pb-2 font-semibold text-gray-700">Search Result 📃</h2>
      <Tracklist list={props.searchResults} />
    </>
  )
}

export default SearchResults
