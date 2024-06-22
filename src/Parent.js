import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

 class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name:"vaibhavi"
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"vaibhavi"
            })
        },2000)
    }
  render() {
    console.log("***********Parent component render*********")
    return (
      <div>Parent component
        <RegComp name={this.state.name}/>
        <PureComp name={this.state.name}/>
      </div>
    )
  }
}

export default Parent