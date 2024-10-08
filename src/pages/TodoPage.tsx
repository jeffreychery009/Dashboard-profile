import React, { useState, useContext } from "react";
import { TodoContext } from "../context/todoProvider";
import TodoCard from "../components/TodoCard";
import { Todo } from "../context/todoProvider";
import Modal from "../components/Modal";

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

      <Modal
        title={currentTodo.id !== null ? "Update Task" : "Add New Task"}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveTask}
      >
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
      </Modal>

      <div className="mt-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-6">
          {todos.map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
              handleOpenModal={handleOpenModal}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TodoPage;
