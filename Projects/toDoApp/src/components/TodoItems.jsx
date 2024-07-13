import TodoItem from "./TodoItem";

function TodoItems({todoitems,onDeleteClick}) {
  return (
    <div className="items-container">
        {todoitems.map(item=><TodoItem todoName={item.name} todoDate={item.dueDate} onDeleteClick={onDeleteClick}></TodoItem>)}
    </div>
  );
};
export default TodoItems;
