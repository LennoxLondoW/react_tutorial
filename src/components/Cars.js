import React, { Component } from 'react'

export default class Cars extends Component {
  render() {
    const style = {
        backgroundColor: 'lightblue',
        borderRadius: '10px',
        padding: '10px',
        margin: '10px'
       }
    
       const currentStyle = this.props.elementStyle ===true? style : {}
      return (
        <div style={currentStyle}>
            <p>{this.props.name}</p>
            <p>{this.props.price}</p>
            <p>{this.props.color}</p>
            <div>{this.props.children}</div>
        </div>
      )
  }
}
