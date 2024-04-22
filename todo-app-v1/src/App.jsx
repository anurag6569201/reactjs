import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItem1 from "./components/TodoItem1";
import "./App.css";

function App(){
  return <div>
    <AppName></AppName>
    <div className="container">
      <AddTodo></AddTodo>
      <TodoItem></TodoItem>
      <TodoItem1></TodoItem1>
    </div>
  </div>
}
export default App;