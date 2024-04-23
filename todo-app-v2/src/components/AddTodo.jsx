function AddTodo() {
    return <div className="row items">
                <div className="col-md-6">
                    <input type="text" name="text" id="text" placeholder="Enter todo here"/>
                </div>
                <div className="col-md-4">
                    <input type="date" className="date" />
                </div>
                <div className="col-md-2">
                    <button className="btn btn-success">Add</button>
                </div>
            </div>
}
export default AddTodo;