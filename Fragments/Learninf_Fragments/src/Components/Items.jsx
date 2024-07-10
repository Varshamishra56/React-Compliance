import styles from "./Items.module.css"

const Items = (props) => {
    return (
      <li className={ `${styles["itemName"]} list-group-item`}>
        {props.fooditem}
      </li>
    );
  };
  export default Items;
  