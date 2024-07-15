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
    
    setToDoitems((currValue)=>{
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
  const HandleDeletebutton = (todoItemname) => {
    const newtodoItem=todoItems.filter(item=>item.name !==todoItemname);
    setToDoitems(newtodoItem);
    console.log(`Item Deleted is ${todoItemname}`);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMsg></WelcomeMsg>}
      <TodoItems
        todoitems={todoItems}
        onDeleteClick={HandleDeletebutton}
      ></TodoItems>
    </center>
  );
}

export default App;
