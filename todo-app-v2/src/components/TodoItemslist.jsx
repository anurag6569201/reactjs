import TodoItem from "./TodoItem";
function Todoitemslist({items}){
    return (
        <div className="container">
            {Todoitemslist.map((item)=>(
                <TodoItem todoName={item.name} todoDate={item.duedate}></TodoItem>
            ))}
        </div>
    );
}
export default Todoitemslist;