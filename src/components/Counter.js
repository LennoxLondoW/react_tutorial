import React, { Component } from 'react'
import './Counter.css'

export default class Counter extends Component {
    // constructor 
    constructor(props) {
      super(props)
    
      this.state = {
         count: 1,
         style: {
            color: 'rgba(255,255,255)',
            backgroundColor: 'rgb(0,0,0)'
         }
      }
    }

    increament(){
        // define rgb values for random colors 
        const r = Math.random(0,255) * 100
        const g = Math.random(0,255) * 100
        const b = Math.random(0,255) * 100

        const bgColor = 'rgb('+r+','+g+','+b+')'
        const textColor = 'rgb('+(255 - r)+','+(255 - g)+','+(255 - b)+')'
        // updating state to new state 
        this.setState((prevState, props)=>({
            count: prevState.count + 1,
            style:{
                color: textColor,
                backgroundColor:bgColor
            }
        }), ()=>{
            console.log(this.state.count)
        })
    }
  render() {
    return (
      <div className='mainDiv' style={this.state.style}>
        <div>
        <div>
            {this.state.count}
        </div>
        <button onClick={()=>this.increament()} type="button">Increament</button>
        </div>
      </div>
    )
  }
}
