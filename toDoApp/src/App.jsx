import "./App1.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddToDo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";
import { TodoItemsContext } from "./Store/todo-items-store";

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
  const [todoItems, setToDoitems] = useState(initialtodoItems);

  const addNewItem = (itemName, itemDueDate) => {
    setToDoitems((currValue) => {
      const newtodoItem = [
        ...currValue,
        {
          name: itemName,
          dueDate: itemDueDate,
        },
      ];
      return newtodoItem;
    });
  };
  const deleteItem = (todoItemname) => {
    const newtodoItem = todoItems.filter((item) => item.name !== todoItemname);
    setToDoitems(newtodoItem);
    console.log(`Item Deleted is ${todoItemname}`);
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
        <AddTodo  />
        <WelcomeMsg></WelcomeMsg>
        <TodoItems
          todoitems={todoItems}
        ></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
