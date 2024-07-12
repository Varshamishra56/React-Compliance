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
import NewFoodItem from "./Components/NewFoodItem";

function App() {
  const handleOnChange = (event) => {
    console.log(event.target.value);
    setTextState(event.target.value);
  };

  // let textStatearr = useState("Food Item is Entered By the user");
  // let textToShow = textStatearr[0];
  // let setTextState = textStatearr[1];

  let [textToShow, setTextState] = useState("Food Item Entered by the User");

  let [fooditems, setnewinput] = useState(['Milk', 'Ghee','Vegetables']);
  const onEnter = (event) => {
    if (event.key === "Enter") {
      let NewFoodItem = event.target.value;
      if (NewFoodItem.trim() !== "") {
        let newitems = [...fooditems, NewFoodItem];
        setnewinput(newitems);
        console.log("new food entered is " + NewFoodItem);
      }
      event.target.value = ""; 
    }
  };

  return (
    <>
      <Container>
        <h1>Healthy Food</h1>
        <FoodInput
          handleOnChange={handleOnChange}
          HandleKeyDown={onEnter}
        ></FoodInput>
        <p>{textToShow}</p>
        <Errormsg items={fooditems} key={fooditems}></Errormsg>
        <Fooditems items={fooditems} key={fooditems}></Fooditems>

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
