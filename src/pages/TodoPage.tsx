import React, { useState, useContext } from "react";
import { TodoContext } from "../context/todoProvider";
import { Todo } from "../context/todoProvider";

const TodoPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTodo, setCurrentTodo] = useState<{
    id: number | null;
    title: string;
    description: string;
  }>({
    id: null,
    title: "",
    description: "",
  });

  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    throw new Error("TodoPage must be used within a TodoProvider");
  }

  const { addTodo, deleteTodo, toggleTodo, updateTodo, todos } = todoContext;

  const handleOpenModal = (todo: Todo) => {
    setCurrentTodo(todo);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCurrentTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
  };

  const handleSaveTask = () => {
    if (currentTodo.id !== null) {
      updateTodo(currentTodo.id, {
        id: currentTodo.id,
        title: currentTodo.title,
        description: currentTodo.description,
        completed: false,
      });
    } else {
      addTodo({
        id: Math.floor(Math.random() * 1000),
        title: currentTodo.title,
        description: currentTodo.description,
        completed: false,
      });
    }
    setIsModalOpen(false);
    setCurrentTodo({ id: null, title: "", description: "" });
  };

  return (
    <>
      <div>
        <div className="bg-white shadow-md p-5 m-5 rounded-lg max-w-80 dark:bg-gray-900">
          <h1 className="font-bold md:text-2xl dark:text-gray-100">
            Todo List
          </h1>
          <p className="text-gray-500 dark:text-gray-300">
            Welcome to the Todo List
          </p>
        </div>
        <button
          className="ml-5 p-2 bg-white rounded-lg shadow-md hover:bg-gray-400 hover:text-white dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-gray-100"
          onClick={() => setIsModalOpen(true)}
        >
          New Task+
        </button>
      </div>

      {/* Modal for Adding or Updating a Task */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-7 rounded-lg shadow-lg max-w-md w-full dark:bg-gray-900">
            <h2 className="text-2xl font-medium mb-4 dark:text-gray-100">
              {currentTodo.id !== null ? "Update Task" : "Add New Task"}
            </h2>
            <input
              type="text"
              name="title"
              placeholder="Task Title"
              value={currentTodo.title}
              onChange={handleChange}
              className="w-full mb-4 p-2 border rounded"
            />
            <textarea
              name="description"
              placeholder="Task Description"
              value={currentTodo.description}
              onChange={handleChange}
              className="w-full mb-3 p-3 border rounded"
            />
            <div className="flex justify-end space-x-3">
              <button
                className="bg-gray-600 text-white px-4 py-2 rounded"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                className="bg-gradient-to-r from-[#0A42D4] to-[#20A2D9] text-white px-4 py-2 rounded"
                onClick={handleSaveTask}
              >
                {currentTodo.id !== null ? "Update Task" : "Save Task"}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-6">
          {todos.map((todo) => (
            <div
              className={`bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ml-4 dark:bg-gray-900 ${
                todo.completed
                  ? "bg-green-500 dark:bg-green-800 text-white"
                  : ""
              }`}
              key={todo.id}
            >
              <h1
                className={`text-xl font-medium mb-3 dark:text-gray-100 ${
                  todo.completed ? "text-white" : ""
                }`}
              >
                {todo.title}
              </h1>
              <p
                className={`text-sm mb-6 dark:text-gray-300 ${
                  todo.completed ? "text-white" : "text-gray-500"
                }`}
              >
                {todo.description}
              </p>
              <div className="flex justify-between flex-wrap gap-2">
                <button
                  className="bg-purple-800 rounded-md text-white px-3 py-1 w-full sm:w-[100px] md:w-[120px] lg:w-auto font-light"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
                <button
                  className="bg-green-700 rounded-md text-white px-3 py-1 w-full sm:w-[100px] md:w-[120px] lg:w-auto font-light"
                  onClick={() => toggleTodo(todo.id)}
                >
                  Complete
                </button>
                <button
                  className="bg-gradient-to-r from-[#0A42D4] to-[#20A2D9] rounded-md text-white px-3 py-1 w-full sm:w-[100px] md:w-[120px] lg:w-auto font-light"
                  onClick={() => handleOpenModal(todo)}
                >
                  Update
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TodoPage;
