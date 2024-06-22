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
import Stylesheet from "./Stylesheet";
import Inline from "./Inline";
import "./appStyles.css"
import styles from "./appStyles.module.css"
import Example from "./Example";
import Parent from "./Parent";
import Demo from "./FuntionComp";
import UserList from "./UserList";
function App() {
    return (
        <div>
            {/* <h1 className="error">Error</h1> */}
            {/* <h1 className={styles.success}>Success</h1> */}
            {/* <Stylesheet primary="true"/> */}
            {/* <Inline/> */}
           {/* <Cal/> */}
           {/* <Calculator/>  */}
           {/* <Form/> */}
           {/* {<InsideJSxC name="vaibhavi"/>} */}
           {/* <Clock/> */}
           {/* <Todo/> */}
           {/* <Random/> */}
           {/* <PracticeReact/> */}
           {/* <LifeCycle color="yellow"/> */}
           {/* <A/> */}
           {/* <Unmouting color="yellow"/> */}
            {/* <Keys/>  */}
            {/* <Example/> */}
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
            {/* <Parent/> */}
            {/* <Demo/> */}
            <UserList/>
        </div>
    )
} 

export default App;