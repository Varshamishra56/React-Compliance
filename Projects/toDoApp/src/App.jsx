
import "./App1.css";
import AppName from "./components/AppName";
import TodoItem1 from "./components/TodoItem1";
import AddTodo from "./components/AddToDo";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo/>
      <div className="items-container">
        <TodoItem1></TodoItem1>
        <TodoItem1></TodoItem1>
        <TodoItem1></TodoItem1>
        <TodoItem1></TodoItem1>
        <TodoItem1></TodoItem1>
        <TodoItem1></TodoItem1>
      </div>
    </center>
  );
}

export default App;