import { Component } from "react";
import { InsideJSxC } from "./InsideJSxC";
export class JsxC extends Component{
constructor(){
    super()
    this.state={
        name:"Vaibhavi",
        age:21
    }

}
changeName=()=>{
    this.setState({
        name:"Kishor",
        age:30
    })
}

changeNewName = () => {
    this.setState({
        name : "Didi"
    })
}
render(){
    return(
        <div>
            <h1>My name is {this.state.name} and I am {this.state.age} years old</h1>
            <button onClick={this.changeName}> ChangeName</button>
            <button onClick={this.changeNewName}> ChangeNewName</button>
            <InsideJSxC name = {this.state.name} />
        </div>

    )
}
}