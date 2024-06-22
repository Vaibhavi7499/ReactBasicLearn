import React from 'react'
let heading={
    fontSize:'72px',
    color:'aqua'
}
function Inline() {
  return (
    <div>
        <h1 style={heading}>Inline</h1>
        <h1 className="error">Error</h1>


        </div>
  )
}

export default Inline