import { useContext } from "react";
import { MdAutoDelete } from "react-icons/md";
import { TodoItemsContext } from "../Store/todo-items-store";

function TodoItem({ todoName, todoDate }) {
  const ContextObj=useContext(TodoItemsContext);
  const deleteItem=ContextObj.deleteItem;
  return (
    <div className="container">
      <div className="row The-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger The-button"
            onClick={() => deleteItem(todoName)}
          >
            <MdAutoDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
