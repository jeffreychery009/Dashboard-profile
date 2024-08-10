import { Link } from "react-router-dom";

const TodoListCard = () => {
  return (
    <>
      <div className="card-style">
        <Link to="/todolist">
          <h3 className="text-sm font-medium mb-4">To-do List</h3>
          <p className="bg-blue-gradient bg-clip-text text-transparent">
            View your active task
          </p>
        </Link>
      </div>
    </>
  );
};

export default TodoListCard;
