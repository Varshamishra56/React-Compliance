import styles from "./Items.module.css";

const Items = ({ fooditem, handleBuyButton }) => {
  return (
    <li className={`${styles["itemName"]} list-group-item`}>
      {fooditem}
      <button
        className={`${styles.button} btn btn-info`}
        // onClick={() => console.log(`${fooditem} is bought
        onKeyDown={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};
export default Items;
