// </React.Fragment>
// <></>
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
// import Item from "./Components/item";
import Fooditems from "./Components/Fooditems";
import Errormsg from "./Components/ErrorMsg";
import "./App.css";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import NewFoodItem from "./Components/NewFoodItem"

function App() {
  // let fooditems = ["Pulses", "Vegetables", "Salad", "Rice", "Milk"];

  let [fooditems, setfooditems] = useState([
    "Pulses",
    "Vegetables",
    "Salad",
    "Rice",
  ]);
  // let fooditems=[];
  // if(fooditems.length==0){
  //   return <h1>I am still hungry</h1>;
  // }

  const handleOnChange = (event) => {
    console.log(event.target.value);
    setTextState(event.target.value);
  };

  let textStatearr = useState("Food Item is Entered By the user");
  let textToShow = textStatearr[0];
  let setTextState = textStatearr[1];

  let [newitemadded,methodtoappenditem]=useState('');

  const setnewfooditem=(event)=>{
    if(event.key=="Enter"){
      newitemadded=event.target.value;
      let newitems=[...fooditems,newitemadded];
      methodtoappenditem(newitems);
    }
  }

  return (
    <>
      <Container>
        <h1>Healthy Food</h1>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <p>{fooditems}</p>
        <p>hey there</p>
        <Errormsg items={fooditems} key={fooditems}></Errormsg>
        <Fooditems items={fooditems} key={fooditems}></Fooditems>
        <NewFoodItem HandleKeyDown={setnewfooditem}></NewFoodItem>
      </Container>

      <Container>
        <h1>
          Above is the list of healthy food that one should have in their meals.
        </h1>
      </Container>
    </>
  );
}

export default App;
