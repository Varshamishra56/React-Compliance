import "./App1.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddToDo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";

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

  const handleNewItem = (itemName, itemDueDate) => {
    const newtodoItem = [
      ...todoItems,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ];
    setToDoitems(newtodoItem);
  };

  
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length===0 &&<WelcomeMsg></WelcomeMsg>}
      <TodoItems todoitems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
