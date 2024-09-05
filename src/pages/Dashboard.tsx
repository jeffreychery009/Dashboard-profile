import React from "react";
import { homepageData } from "../data/DummyData";
import { TodoContext } from "../context/todoProvider";

const Dashboard = () => {
  const todoContext = React.useContext(TodoContext);

  const { todos } = todoContext || { todos: [] };
  return (
    <>
      <div className=" max-w-80 ">
        <div className="bg-white shadow-md p-5 m-5 rounded-lg dark:bg-gray-900">
          <h1 className="font-bold md:text-2xl dark:text-gray-100">
            Dashboard.io
          </h1>
          <p className="text-gray-500 dark:text-gray-300">
            Welcome to your Dashboard
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        {homepageData.map((data, index) => {
          return (
            <div
              key={index}
              className="bg-white shadow-md p-10 rounded-lg dark:bg-gray-900"
            >
              <h1 className="font-bold md:text-2xl dark:text-gray-100">
                {data.title}
              </h1>
              <p className="text-gray-500 dark:text-gray-300">
                {data.description}
              </p>
            </div>
          );
        })}
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-4">
          <div className="bg-white shadow-md p-5 rounded-lg hover:shadow-lg transition-shadow dark:bg-gray-900">
            <div>
              <p className="text-2xl font-medium mb-14 dark:text-gray-100">
                {" "}
                Weather
              </p>
              <span className="text-sm text-blue-400 font-light dark:text-blue-100">
                View the weather in the most common cities of the U.S
              </span>
            </div>
          </div>

          <div className="bg-white shadow-md p-5 rounded-lg   hover:shadow-lg transition-shadow dark:bg-gray-900">
            <div>
              {todos.slice(0, 1).map((todo, i) => (
                <div className="flex flex-col" key={i}>
                  <span className="text-2xl font-medium dark:text-gray-100">
                    Task: {todo.title}
                  </span>
                  <span className="text-sm text-gray-400 font-light dark:text-gray-300">
                    {todo.description}
                  </span>
                  <span className="mt-10 font-light text-blue-500 text-sm dark:text-blue-100">
                    View all your other tasks
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white shadow-md p-5 rounded-lg  hover:shadow-lg transition-shadow dark:bg-gray-900">
            <div>
              <p className="text-2xl font-medium mb-14 dark:text-gray-100">
                Read the News
              </p>
              <span className=" font-light text-blue-400 text-sm dark:text-blue-100">
                Read different articles revolving around different topics
              </span>
            </div>
          </div>
          <div className="bg-white shadow-md p-5 rounded-lg hover:shadow-lg transition-shadow dark:bg-gray-900">
            <div>
              <p className="text-2xl font-medium mb-14 dark:text-gray-100">
                Contacts
              </p>
              <span className="font-light text-blue-400 text-sm dark:text-blue-100">
                View and access your contacts
              </span>
            </div>
          </div>
          <div className="bg-white shadow-md p-5 rounded-lg md:col-span-2 lg:col-span-2 flex  hover:shadow-lg transition-shadow dark:bg-gray-900">
            <div>
              <p className="text-2xl font-medium mb-14 dark:text-gray-100">
                Settings
              </p>
              <span className="font-light text-blue-400 text-sm dark:text-blue-100">
                Customize your dashboard
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
