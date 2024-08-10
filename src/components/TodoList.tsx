import { useEffect, useState } from "react";
import menu from "../assets/list.svg";
import profileImage from "../assets/ProfileImage.jpg";

import { Link } from "react-router-dom";
import Navigation from "./Navigation";

export interface TodoItem {
  id: number;
  title: string;
  description: string;
  time: string;
}

const TodoList = () => {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  const [isNavOpen, setIsNavOpen] = useState(false);

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

  return (
    <>
      <>
        <div className="min-h-screen flex flex-col">
          <div>
            <div className="custom-mobile:flex justify-between items-center mb-5">
              <button onClick={toggleNav}>
                <img src={menu} alt="menu icon" />
              </button>
              <h1 className="h1-style text-center ">Dashboard.io</h1>
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
                <div key={item.id}>
                  <div className="card-style-todo mb-4">
                    <h3 className="text-md font-semibold">{item.title}</h3>
                    <p className="text-xs ">{item.description}</p>
                    <p className="mt-[48px]">Time: {item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default TodoList;
