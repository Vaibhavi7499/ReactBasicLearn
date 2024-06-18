import React, { Component } from "react";
import TimerComponent from "./Unmouting";
class LifeCycle extends Component {
  constructor(props) {
    super(props);
console.log("constructor called")
    this.state = {
      color: "red",
    };
  }
//   static getDerivedStateFromProps(props,state){
// return {color:props.color}
//   }
componentDidMount(){
    setTimeout(()=>{
        this.setState({
            color:this.props.color
        })
    },2000)
}
  render() {
    return (
      <div>
        <h1>My Car color is {this.state.color}</h1>
        <TimerComponent/>
      </div>
    );
  }
}


export default LifeCycle;
