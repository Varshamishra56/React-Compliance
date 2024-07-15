import TodoItem from "./TodoItem";

function TodoItems({ todoitems, onDeleteClick }) {
  return (
    <div className="items-container">
      {todoitems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
}
export default TodoItems;
