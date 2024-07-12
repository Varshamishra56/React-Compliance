import styles from "./FoodInput.module.css";

const FoodInput = ({handleOnChange}) => {
  return (
    <input
      type="text"
      placeholder="Enter fooditem here"
      className={styles.foodinp}
    //   onChange={(event) => console.log(event.target.value)}
    onClick={handleOnChange}
    />
  );
};
export default FoodInput;

// we can also pass a method handleonchange into the function and then into 
// App.jsx inside FoodInput we can call handleonchange={handleonchange} and 
// inside FoodInput onchange can be passed with {handleonchange}
