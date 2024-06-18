import React, { Component } from 'react'

export class B extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        villegeName:"Kanheri"
      }
    }
  render() {
    return (

      <div>
        <button onClick={()=>this.props.villege(this.state.villegeName)}>Click</button>
      </div>
    )
  }
}

export default B