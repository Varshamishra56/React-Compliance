import styles from "./Items.module.css";

const Items = ({ fooditem,bought, handleBuyButton }) => {
  return (
    <li className={`${styles["itemName"]} list-group-item ${bought && 'text-bg-dark p-3'}`}>
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
