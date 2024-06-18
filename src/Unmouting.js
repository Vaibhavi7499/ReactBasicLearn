import React, { Component } from 'react'

 class Unmoutings extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       color:"red"
    }
  }
  shouldComponentUpdate(){
    return true
  }

  ChangeColor=()=>{
this.setState({
  color:"blue"
})
  }
  render() {
    return (
      <div>
        <h1>My favourite color is {this.state.color}</h1>
        <button onClick={this.ChangeColor}>ChangeColor</button>
      </div>
    )
  }
}

export default Unmoutings