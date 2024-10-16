import { Music } from "../util/MusicType"
import Tracklist from "./Tracklist"

function SearchResults(props: { searchResults: Music[] }) {

  return (
    <>
      <h2 className="bg-sky-600 text-white text-2xl py-4 px-6 font-semibold rounded-tl-[24px]">Search Result 📃</h2>
      <Tracklist list={props.searchResults} />
    </>
  )
}

export default SearchResults
