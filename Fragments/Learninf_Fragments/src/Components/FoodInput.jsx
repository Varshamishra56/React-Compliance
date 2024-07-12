import styles from "./FoodInput.module.css";

const FoodInput = ({handleOnChange,HandleKeyDown}) => {
  return (
    <input
      type="text"
      placeholder="Enter fooditem here"
      className={styles.foodinp}
    //   onChange={(event) => console.log(event.target.value)}
    onChange={handleOnChange}
    onKeyDown={HandleKeyDown}
    />
  );
};
export default FoodInput;

// we can also pass a method handleonchange into the function and then into 
// App.jsx inside FoodInput we can call handleonchange={handleonchange} and 
// inside FoodInput onchange can be passed with {handleonchange}
