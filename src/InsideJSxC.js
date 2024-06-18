import { Component } from "react";

export class InsideJSxC extends Component {
         constructor() {
            super()
        this.state={
            msg:"Hello"
        }
        this.Handler=this.Handler.bind(this)
    }
 Handler(){
 this.setState({
      msg:"goodbye"
  })
    }
    render() {
        return (
            <div>
                {/* <button onClick={this.Handler.bind(this)}>Click</button>           */}
                {/* <button onClick={()=>this.Handler()}>Click</button>      */}
                {/* { <button onClick={this.Handler}>Click</button>  } */}
                <div>{this.state.msg}</div>
                <button onClick={this.Handler}>Click</button>
            </div>
        )
    }
}