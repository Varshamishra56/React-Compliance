import TodoItem from "./TodoItem";

function TodoItems({todoitems}) {
  return (
    <div className="items-container">
        {todoitems.map(item=><TodoItem todoName={item.name} todoDate={item.dueDate}></TodoItem>)}
    </div>
  );
};
export default TodoItems;
