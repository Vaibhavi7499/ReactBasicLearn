import { Component } from "react";
import "./cal.css";
export class Cal extends Component {
  constructor() {
    super();
    this.state = {
      firstNum: "",
      secondNum: "",
      total: "",
      operation: "",
    };
  }

  firstNumFunc(num) {
    let first = num.target.value;
    this.setState({
      firstNum: first,
    });
  }

  secondNumFunc(num) {
    let second = num.target.value;
    this.setState({
      secondNum: second,
    });
  }
  cal(args) {
    switch (args) {
      case "add":
        this.setState({
          operation: "Addition",
          total: Number(this.state.firstNum) + Number(this.state.secondNum),
        });
        break;

      case "sub":
        this.setState({
          operation: "Subtraction",
          total: Number(this.state.firstNum) - Number(this.state.secondNum),
        });
        break;

      case "mul":
        this.setState({
          operation: "Multiplication",
          total: Number(this.state.firstNum) * Number(this.state.secondNum),
        });
        break;

      case "div":
        this.setState({
          operation: "Division",
          total: Number(this.state.firstNum) / Number(this.state.secondNum),
        });
        break;
    }
  }
  render() {
    return (
      <div className="center">
        <div className="firstDiv">
          <label>Enter the first number</label>
          <input
            type="text"
            value={this.state.firstNum}
            onChange={(ele) => {
              this.firstNumFunc(ele);
            }}
          ></input>
        </div>

        <div className="secondDiv">
          <label>Enter the second number</label>
          <input
            type="text"
            value={this.state.secondNum}
            onChange={(ele) => {
              this.secondNumFunc(ele);
            }}
          ></input>
        </div>
        <div>
          <button onClick={() => this.cal("add")}>+</button>
          <button onClick={() => this.cal("sub")}>-</button>
          <button onClick={() => this.cal("mul")}>*</button>
          <button onClick={() => this.cal("div")}>/</button>
        </div>
        <div>
          <h2>firstNum : {this.state.firstNum}</h2>
          <h2>secondNum: {this.state.secondNum}</h2>
          <h1>
            {" "}
            {this.state.operation ? this.state.operation + " is =" : ""}{" "}
            {this.state.total}
          </h1>
        </div>
      </div>
    );
  }
}
