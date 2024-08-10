import { Link } from "react-router-dom";

const TodoListCard = () => {
  return (
    <>
      <div className="card-style">
        <Link to="/todolist">
          <h3 className="text-sm font-medium mb-4">To-do List</h3>
          <p>Add a Task</p>
        </Link>
      </div>
    </>
  );
};

export default TodoListCard;
