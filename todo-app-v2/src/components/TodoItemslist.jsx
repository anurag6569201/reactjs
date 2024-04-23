import TodoItem from "./TodoItem";

let TodoItemsList = ({ listelement }) => {
    return (
        <>
            {listelement.map((item, index) => (
                <TodoItem key={index} todoName={item.name} todoDate={item.duedate}></TodoItem>
            ))}
        </>
    );
};

export default TodoItemsList;