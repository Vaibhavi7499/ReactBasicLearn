import Header from './component/Header';
import './App.css';

function App() {
  let name="Vaibhavi Kishor Bodke"
  let obj={
    name:"vaibhavi",
    address:{
      location:{
        city:"Latur"
      }
    }
  }
  let {address:{location:{city}}}=obj
  return (
    <div className="App">
      <h1>Hello {name} and I am from {city}</h1>
      <Header></Header>
    </div>
  );
}

export default App;
