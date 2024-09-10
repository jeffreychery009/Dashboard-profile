import { createContext, useState, ReactNode, FC, useEffect } from "react";

// Defining the shape of the todo context
export interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}
// Creating the context using the shape defined above
interface TodoContextType {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, todo: Todo) => void;
  toggleTodo: (id: number) => void;
}

export const TodoContext = createContext<TodoContextType | undefined>(
  undefined
);

interface TodoProviderProps {
  children: ReactNode;
}
// Creating the provider to be wrapped around the app component and adding the todos to local storage
export const TodoProvider: FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Functions to add, delete, update and toggle todos
  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id: number, newTodo: Todo) => {
    setTodos(todos.map((todo) => (todo.id === id ? newTodo : todo)));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return (
    <TodoContext.Provider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
