import { Component } from "react";

class UserList extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    setTimeout(()=>{
        fetch("https://mocki.io/v1/e8471ace-6f1a-46e7-8fb8-ccee249a5877")
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          this.setState({
            users: response,
          });
        });
    },5000)
    
  }
  render() {
    console.log(this.state.users)
    return (
    
      <div>
        <h1>Userlist Component</h1>
       
        <ul>
          {
          this.state.users.length ?
          this.state.users.map((ele) => (
            <li key={ele?.id}>
              {ele.id} {ele.name}
            </li>
          ))
         : <h1>loading....</h1>
        }
        </ul>
      </div>
    );
  }
}
export default UserList;
