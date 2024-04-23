function TodoItem({todoName,todoDate}){
    return <div className="row items">
    <div className="col-md-6">
      {todoName}
    </div>
    <div className="col-md-4">
      {todoDate}
    </div>
    <div className="col-md-2">
      <button className="btn btn-warning">Delete</button>
    </div>
  </div>
}
export default TodoItem