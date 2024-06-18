import { Component } from "react";
import "./todo.css";
export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      todoArr: [],
      isUpdate:false,
      updatedvalue:"",
    };
  }

  changeValue(n) {
    this.setState({
      value: n.target.value,
    });
  }
  Add=()=>{
    if(this.state.isUpdate){
      let m=this.state.todoArr.map((ele)=>{
        return ele === this.state.updatedvalue ? (ele = this.state.value):ele;
      })
      this.setState({
        todoArr:m,
        value:"",
        updatedvalue:"",
        isUpdate:false,
      })
    }
    else{
    this.setState({
      todoArr: [...this.state.todoArr, this.state.value],
      value:''
    });
  }
  };
  removeItem(item){
let a=this.state.todoArr.filter((ele)=>{
        return ele!=item
})
this.setState({
  todoArr:a
})
  }
  updateItem(e){
     this.setState({
      updatedvalue:e,
      value:e,
      isUpdate:true
     })
  }

  render() {
    return (
      <div className="suncontain">
        <h1>ToDo List</h1>
          <input
            type="text"
            value={this.state.value}
            onChange={(ele) => {
              this.changeValue(ele);
            }}
          ></input>
          <button className="btn1" onClick={this.Add.bind(this)}>
            {
              this.state.isUpdate ?  "Update Item" :  "Add"
            }</button>

          <ol>
            {
              this.state.todoArr.length==0?<h1>todo is empty</h1>:this.state.todoArr.map((ele, i) => (              
                <li>{ele} <button className="removeItem" onClick={()=>{this.removeItem(ele)}}>X</button>
                  <button className="updateItem" onClick={()=>{this.updateItem(ele)}}>Update</button>
                  </li>
                ))
            }
            
          </ol>
      </div>
    );
  }
}
