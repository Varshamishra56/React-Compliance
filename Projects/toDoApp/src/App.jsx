import "./App1.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddToDo";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems=[{
    name:"Buy Milk",
    dueDate: "4/10/2023",
  },
  {
    name:"bhaii college ja",
    dueDate: "4/10/2023",
  }];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo/>
      <TodoItems todoitems={todoItems}></TodoItems>
      
    </center>
  );
}

export default App;