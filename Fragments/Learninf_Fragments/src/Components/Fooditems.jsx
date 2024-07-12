import { useState } from "react";
import Items from "./Items";

const Fooditems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton=(item,event)=>{
    
    let newitem=[...activeItems,item];
    setActiveItems(newitem);
  }

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Items
          fooditem={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event)=>onBuyButton(item,event)}
        ></Items>
      ))}
    </ul>
  );
};
export default Fooditems;
