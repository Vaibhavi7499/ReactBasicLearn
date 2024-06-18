// import { useState } from "react";

import { Component } from "react";

// export function PracticeReact() {
//     const[name,setName]=useState({firstname:"Kishor"})
//   let arr = [
//     {
//       id: 1,
//       name: "Apple",
//     },
//     {
//       id: 2,
//       name: "Banana",
//     },
//     {
//       id: 3,
//       name: "Orange",
//     },
//   ];
//   let ChangeName=()=>{
//     setName({firstname:"Kishor Phawade"})
//   }
//   return (
//     <div>
//         {
//             arr.map((ele)=>(
//                 <h1>{ele.id} {ele.name}</h1>
//             ))
// }
// <h1>{name.firstname}</h1>
// <button onClick={ChangeName}>Click</button>
//     </div>
//   )
// }
export class PracticeReact extends Component{
  constructor(){
    super()
    this.state={
      count:0
    }
  }
  Increment(){
    // this.setState({
    //   count:this.state.count+1
    // },()=>{
    //   console.log("callback value",this.state.count)
    // })
    this.setState((prevState)=>({
count:prevState.count+1
    }))
    console.log(this.state.count)
  }
 IncrementFive(){
  this.Increment()
  this.Increment()
  this.Increment()
  this.Increment()
  this.Increment()

 }
  render(){
    return(
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={()=>{this.IncrementFive()}}>Increment</button>
      </div>
    )
  }
}
