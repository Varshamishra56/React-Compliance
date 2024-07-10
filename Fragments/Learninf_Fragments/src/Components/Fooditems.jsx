import Items from "./Items";

const Fooditems = ({items}) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Items fooditem={item}></Items>
      ))}
    </ul>
  );
};
export default Fooditems;
