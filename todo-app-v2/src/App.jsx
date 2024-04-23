import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItemsList from "./components/TodoItemslist";

function App(){
  const items=[
    {
    name:"buy Milk",
    duedate:"4/05/24"
  },{
    name:"buy Tea",
    duedate:"8/03/24"
  },{
    name:"buy Dress",
    duedate:"12/07/24"
  },
];

  return <div>
    <AppName></AppName>
    <div className="container">
      <AddTodo></AddTodo>
      <TodoItemsList listelement={items}></TodoItemsList>
    </div>
  </div>
}
export default App;