import React from 'react'
const style = {
    backgroundColor: "blue",
    color: "white",
    fontFamily: "arial",
    margin:"10px",
    borderRadius: "5px",
    padding: "10px"
}

function Inline() {
  return (
    <button style={style}>Inline</button>
  )
}

export default Inline