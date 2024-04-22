function TodoItem(){
    let name='Buy Milk';
    let date='4/10/23'

    return <div className="row items">
    <div className="col-md-6">
      {name}
    </div>
    <div className="col-md-4">
      {date}
    </div>
    <div className="col-md-2">
      <button className="btn btn-warning">Delete</button>
    </div>
  </div>
}
export default TodoItem