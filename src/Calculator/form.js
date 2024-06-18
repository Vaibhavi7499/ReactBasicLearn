import { Component } from "react";
import "./Form.css";
import { ShowDetails } from "./ShowDetails";

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      fullnam: "",
      mob: "",
      email: "",
      isSubmit : false
    };
  }
  Demo(n, extraParam) {
    let a = n.target.value;
    switch (extraParam) {
      case "fullName":
        {
          this.setState({
            fullnam: a,
          });
        }
        break;
      case "mobile":
        {
          this.setState({
            mob: a,
          });
        }
        break;
      case "email":
        {
          this.setState({
            email: a,
          });
        }
        break;
    }
  }
   SubmitForm =() => {
    this.setState({
        isSubmit: true,
    });
  }

  clearValue =() => {
    this.setState({
        fullnam: "",
        mob: "",
        email: "",
        isSubmit : false
    })
  }
  render() {
    return (
      <div className="maindiv">
         <h2>Registration Form</h2>

          <div className="contain">
            <label className="lbl">Full Name:</label>
            <input
              type="text"
              placeholder="Enter Full Name"
              value={this.state.fullnam}
              onChange={(ele) => {
                this.Demo(ele, "fullName");
              }}
            ></input>
            <br></br>

            <label className="lbl2">Mobile Number:</label>
            <input
              type="text"
              placeholder="Enter mobile number"
              value={this.state.mob}
              onChange={(ele) => {
                this.Demo(ele, "mobile");
              }}
            ></input>
            <br></br>

            <label className="lbl1">Email id:</label>
            <input
              type="text"
              placeholder="Enter email id"
              value={this.state.email}
              onChange={(ele) => {
                this.Demo(ele, "email");
              }}
            ></input>
            <br></br>
            <button className="btn1" onClick={this.SubmitForm}>Submit</button>
            <button className="btn1" onClick={this.clearValue}>Clear</button>
          </div>
            {
            this.state.isSubmit 
            ? <ShowDetails details = { this.state}/> 
            : ''
        }
          
       
      </div>
    );
  }
}
