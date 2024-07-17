import "./App1.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddToDo";
import TodoItems from "./components/TodoItems";
import { useReducer, useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";
import { TodoItemsContext } from "./Store/todo-items-store";

const todoItemsReducer = (currTodoItems,action) => {
  let newtodoItem=currTodoItems;
  if(action.type==='NEW_ITEM'){
    newtodoItem = [
        ...currTodoItems,
        { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
      ];
      // return newtodoItem;

  }else if(action.type==='DELETE_ITEM'){
    newtodoItem = currTodoItems.filter((item) => item.name !== action.payload.itemName);
    // return newtodoItem;
  }
  return newtodoItem;

};
function App() {
  const initialtodoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "bhaii college ja",
      dueDate: "4/10/2023",
    },
  ];
  // const [todoItems, setToDoitems] = useState(initialtodoItems);
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };
  const deleteItem = (todoItemname) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName:todoItemname,
      },
    };
    dispatchTodoItems(deleteItemAction);


  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMsg></WelcomeMsg>
        <TodoItems todoitems={todoItems}></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
