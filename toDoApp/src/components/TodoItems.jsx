import { useContext } from "react";
import { TodoItemsContext } from "../Store/todo-items-store";
import TodoItem from "./TodoItem";

function TodoItems({  onDeleteClick }) {
  const ContextObj=useContext(TodoItemsContext);
  const todoitems=ContextObj.todoItems;
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
