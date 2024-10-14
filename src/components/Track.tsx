function Track(props: { isRemoval: boolean }) {
  type ActionProps = {
    isRemoval: boolean;
  };

  function renderAction(props: ActionProps) {
    return (
      <button className="bg-blue-500 text-white rounded px-2 py-1 hover:bg-blue-600 ml-2">
        {props.isRemoval ? "Remove" : "Add"}
      </button>
    )
  }

  return (
    <>
      <h2>Track</h2>
      {renderAction(props)} 
    </>
  )
}

export default Track;
