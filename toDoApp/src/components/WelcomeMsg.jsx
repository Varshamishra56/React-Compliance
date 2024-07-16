import { useContext } from "react";
import { TodoItemsContext } from "../Store/todo-items-store";

const WelcomeMsg = () => {
  const ContextObj = useContext(TodoItemsContext);
  const todoItems = ContextObj.todoItems;

  return (
    todoItems.length === 0 && (
      <h2>There is Nothing to do now...Enjoy Your Day!!</h2>
    )
  );
};
export default WelcomeMsg;
