import "./App.css"
import About from "./About";
import ContactUs from "./ContactUs";
import FAQ from "./FAQ";
import { JsxC } from "./JsxC";
import { Cal } from "./Cal";
import { InsideJSxC } from "./InsideJSxC";
import { Calculator } from "./Calculator/Calculator";
import Unmouting from "./Unmouting";
// import { Form } from "./Calculator/form";
// import { Clock } from "./clock";
// import { Todo } from "./todo";
import { Random } from "./Random";
import { PracticeReact } from "./PracticeReact";
import Keys from "./Keys";
// import LifeCycle from "./LifeCycle";
import A from "./A";
import Home from "./Home";
// import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import PageNotFound from "./PageNotFound";
function App() {
    return (
        <div>
           {/* <Cal/> */}
           {/* <Calculator/>  */}
           {/* <Form/> */}
           {/* {<InsideJSxC name="vaibhavi"/>} */}
           {/* <Clock/> */}
           {/* <Todo/> */}
           <Random/>
           {/* <PracticeReact/> */}
           {/* <LifeCycle color="yellow"/> */}
           {/* <A/> */}
           {/* <Unmouting color="yellow"/> */}
            {/* <Keys/>  */}
           {/* <BrowserRouter>
           <Routes>
            <Route path="/" element={<Layout/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/ContactUs" element={<ContactUs/>}/>
            <Route path="/FAQ" element={<FAQ/>}/>
            <Route path="*" element={<PageNotFound/>}/>

           </Routes>
            </BrowserRouter> */}
        </div>
    )
} 

export default App;