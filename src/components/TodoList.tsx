import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import menu from "../assets/list.svg";
import profileImage from "../assets/ProfileImage.jpg";
import dots from "../assets/dots-three-vertical.svg";
import Navigation from "./Navigation";

export interface TodoItem {
  id: string;
  title: string;
  description: string;
  time: string;
}

interface TodoListProps {
  onEdit: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ onEdit }) => {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleDropDown = (id: string) => {
    setIsDropDownOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const storedTodoList = JSON.parse(localStorage.getItem("todoList") || "[]");
    setTodoList(storedTodoList);
  }, []);

  useEffect(() => {
    // Scroll to the top of the page when this component is mounted
    window.scrollTo(0, 0);
  }, []);

  const handleDelete = (id: string) => {
    const updatedTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(updatedTodoList);
    localStorage.setItem("todoList", JSON.stringify(updatedTodoList));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <div className="custom-mobile:flex justify-between items-center mb-5 custom-tablet:flex">
          <button onClick={toggleNav}>
            <img src={menu} alt="menu icon" />
          </button>
          <h1 className="h1-style text-center">Dashboard.io</h1>
          <img
            className="w-[28px] h-[28px] rounded-full"
            src={profileImage}
            alt=""
          />
        </div>
        <Navigation isOpen={isNavOpen} toggleNav={toggleNav} />
      </div>
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-md font-semibold">To-do List</h2>
        <Link to="/todolist/edit">
          <button className="flex justify-center items-center h-[37px] w-[100px] rounded-[30px] border border-blue bg-white">
            Add Task
          </button>
        </Link>
      </div>
      <div className="flex-grow">
        <div>
          {todoList.map((item) => (
            <div key={item.id} className="relative">
              <div className="card-style-todo mb-4 flex justify-between items-center relative">
                <div>
                  <h3 className="text-md font-semibold">{item.title}</h3>
                  <p className="text-xs">{item.description}</p>
                  <p className="mt-[48px]">Time: {item.time}</p>
                </div>
                <div className="ml-4 relative">
                  <img
                    className="w-8 h-8 cursor-pointer"
                    src={dots}
                    alt="options"
                    onClick={() => toggleDropDown(item.id)}
                  />
                  {isDropDownOpen[item.id] && (
                    <div className="absolute right-0 mt-2 w-24 bg-white border border-gray-300 rounded shadow-lg z-50">
                      <button
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                        onClick={() => {
                          onEdit(item.id);
                          toggleDropDown(item.id);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                        onClick={() => {
                          handleDelete(item.id); // Call delete function
                          toggleDropDown(item.id);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
