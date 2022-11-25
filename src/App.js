
import React from "react";
import './App.css';
import {Routes,Link,Route} from 'react-router-dom';
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    // <HashRouter>
      
    //   <Route path="/" component={Home}></Route>
    //   <Route path="/about" component={About}></Route>
      
    // </HashRouter>
    <>
    <Navigation/>  
    <Routes>
    
      <Route path="/" element={<Home></Home>}/>
      <Route path="/about" element={<About></About>}/>
      
    </Routes>
    {/* <Home></Home> */}

    </>
    
      
    
    
  );
}
export default App;
