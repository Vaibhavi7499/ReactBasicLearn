import { Component } from "react";
import "./random.css"
export class Random extends Component {
  constructor() {
    super();
    this.state = {
      player1:0,
      player2:0,
      sumP1:0,
      sumP2:0,
    };
  }
  Player1=()=>{
    this.setState({
        player1:Math.floor(Math.random() * 10+1),
        sumP1:this.state.sumP1+this.state.player1
    })
    
  }
  Player2=()=>{
    this.setState({
        player2:Math.floor(Math.random() * 10+1),
        sumP2:this.state.sumP2+this.state.player2
    })
  }
  Winner(){

    if(this.state.sumP1>=20){
        return <h1>Hey!!Player 1 is Winner...</h1>
    }
    else if(this.state.sumP2>=20)
        {
            return <h1>Hey!!Player 2 is Winner...</h1>
        }
        else{
                      return <h1>Winner is.....</h1>
        }
  }
  render() {
    return (
        <div>
        <h1>Game</h1>
      <div className="subcontainer">
        <button className="player1"  onClick={this.Player1.bind(this)} disabled={this.state.sumP1>=20 || this.state.sumP2>=20} >Player 1</button>
        <h1 className="text-center">{this.state.sumP1}</h1>
       <button className="player2" onClick={this.Player2.bind(this)}  disabled={this.state.sumP2>=20 || this.state.sumP1>=20}>Player 2</button>
       <h1 className="text-center">{this.state.sumP2}</h1>

         {this.Winner()}
    
      </div>
      </div>
    );
  }
}
