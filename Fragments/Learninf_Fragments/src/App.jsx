import "bootstrap/dist/css/bootstrap.css";
import React from "react";
// import Item from "./Components/item";
import Fooditems from "./Components/Fooditems";
import Errormsg from "./Components/ErrorMsg";
import "./App.css"


function App() {
  let fooditems=["Pulses","Vegetables","Salad","Rice","Milk"];
  // let fooditems=[];
  // if(fooditems.length==0){
  //   return <h1>I am still hungry</h1>;
  // }
  return (
    <React.Fragment>
      <h1>Healthy Food</h1>
      <Errormsg items={fooditems} key={fooditems}></Errormsg>      
      <Fooditems items={fooditems} key={fooditems}></Fooditems>
      
    </React.Fragment>  
    // <></>
  );
}

export default App;
