import React from 'react'

function UserData(props) {
   const style = {
    backgroundColor: 'lightblue',
    borderRadius: '10px',
    padding: '10px',
    margin: '10px'
   }

   const currentStyle = props.elementStyle ===true? style : {}
  return (
    <div style={currentStyle}>
        <p>{props.name}</p>
        <p>{props.age}</p>
        <p>{props.email}</p>
        <div>{props.children}</div>
    </div>
  )
}

export default UserData