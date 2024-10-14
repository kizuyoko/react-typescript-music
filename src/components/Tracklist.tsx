import Track from "./Track";

function Tracklist() {

  return (
    <>
      <h2>Tracklist</h2>
      <ul>
        <li>T1: <Track isRemoval={true} /></li>
        <li>T2: <Track isRemoval={true} /></li>
        <li>T3: <Track isRemoval={true} /></li>
      </ul>
    </>
  )
}

export default Tracklist;