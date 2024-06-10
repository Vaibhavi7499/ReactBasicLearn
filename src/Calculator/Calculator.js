import { Component } from "react";
import "./Calculator.css";
export class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      arrayvar: [],
      total : 0
    };
  }
  cal(newelement) {
    switch(newelement)
    {
    case 'C':
      this.setState({
        arrayvar: [],
        total : 0
      });
    break;
   
    case '=':
        let t = this.state.arrayvar
       
        this.setState({
            total : t.join('')
        })
        
        break;

    default:
      this.setState((prevState) => ({
        arrayvar: [...prevState.arrayvar, newelement],
      }))

    }

  }

  render() {
    console.log(this.state.total,'arrr');
    return (
      <div className="container">
        <h1>React JS Calculator</h1>
        <table>
          <tr>
            <td colspan="3">
              <input
                type="text"
                value={
                  !this.state.arrayvar.length
                    ? "0"
                    : this.state.arrayvar.join("")
                }
              ></input>
            </td>
            <td>
              <input
                type="button"
                value={"C"}
                onClick={() => this.cal("C")}
                className="btn1"
              ></input>
            </td>
          </tr>

          <tr>
            <td>
              <input
                type="button"
                value={1}
                onClick={() => this.cal(1)}
                className="btn1"
              ></input>
            </td>
            <td>
              <input
                type="button"
                value={2}
                onClick={() => this.cal(2)}
                className="btn1"
              ></input>
            </td>
            <td>
              <input
                type="button"
                value={3}
                onClick={() => this.cal(3)}
                className="btn1"
              ></input>
            </td>
            <td>
              <input
                type="button"
                value={"/"}
                onClick={() => this.cal("/")}
                className="btn1"
              ></input>
            </td>
          </tr>

          <tr>
            <td>
              <input
                type="button"
                value={4}
                onClick={() => this.cal(4)}
                className="btn1"
              ></input>
            </td>
            <td>
              <input
                type="button"
                value={5}
                onClick={() => this.cal(5)}
                className="btn1"
              ></input>
            </td>
            <td>
              <input
                type="button"
                value={6}
                onClick={() => this.cal(6)}
                className="btn1"
              ></input>
            </td>
            <td>
              <input
                type="button"
                value={"*"}
                onClick={() => this.cal("*")}
                className="btn1"
              ></input>
            </td>
          </tr>

          <tr>
            <td>
              <input
                type="button"
                value={7}
                onClick={() => this.cal(7)}
                className="btn1"
              ></input>
            </td>
            <td>
              <input
                type="button"
                value={8}
                onClick={() => this.cal(8)}
                className="btn1"
              ></input>
            </td>
            <td>
              <input
                type="button"
                value={9}
                onClick={() => this.cal(9)}
                className="btn1"
              ></input>
            </td>
            <td>
              <input
                type="button"
                value={"-"}
                onClick={() => this.cal("-")}
                className="btn1"
              ></input>
            </td>
          </tr>

          <tr>
            <td>
              <input
                type="button"
                value={0}
                onClick={() => this.cal(0)}
                className="btn1"
              ></input>
            </td>
            <td>
              <input
                type="button"
                value={"."}
                onClick={() => this.cal(".")}
                className="btn1"
              ></input>
            </td>
            <td>
              <input
                type="button"
                value={"="}
                onClick={() => this.cal("=")}
                className="btn1"
              ></input>
            </td>
            <td>
              <input
                type="button"
                value={"+"}
                onClick={() => this.cal("+")}
                className="btn1"
              ></input>
            </td>
          </tr>
        </table>
        <h1>{eval(this.state.total)}</h1>
       
      </div>
    );
  }
}
