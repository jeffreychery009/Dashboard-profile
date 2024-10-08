import React from "react";
import { Todo } from "../context/todoProvider";

interface TodoCardProps {
  todo: Todo;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  handleOpenModal: (todo: Todo) => void;
}

const TodoCard: React.FC<TodoCardProps> = ({
  todo,
  deleteTodo,
  toggleTodo,
  handleOpenModal,
}) => {
  return (
    <div
      className={`flex flex-col justify-between h-full p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ml-4 ${
        todo.completed
          ? "bg-green-500 dark:bg-green-800 text-white"
          : "bg-white dark:bg-gray-900"
      }`}
    >
      <div>
        <h1
          className={`text-xl font-medium mb-3 dark:text-gray-100 ${
            todo.completed ? "text-white" : ""
          }`}
        >
          {todo.title}
        </h1>
        {todo.description && (
          <p
            className={`text-sm mb-6 dark:text-gray-300 ${
              todo.completed ? "text-white" : "text-gray-500"
            }`}
          >
            {todo.description}
          </p>
        )}
      </div>
      <div className="flex justify-between flex-wrap gap-2 mt-auto">
        <button
          className="bg-purple-800 rounded-md text-white px-3 py-1 w-full sm:w-[100px] md:w-[120px] lg:w-[100px] font-light"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
        <button
          className="bg-green-700 rounded-md text-white px-3 py-1 w-full sm:w-[100px] md:w-[120px] lg:w-[100px] font-light"
          onClick={() => toggleTodo(todo.id)}
        >
          Complete
        </button>
        <button
          className="bg-gradient-to-r from-[#0A42D4] to-[#20A2D9] rounded-md text-white px-3 py-1 w-full sm:w-[100px] md:w-[120px] lg:w-[100px] font-light"
          onClick={() => handleOpenModal(todo)}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
