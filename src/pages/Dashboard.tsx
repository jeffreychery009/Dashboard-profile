import React from "react";
import { homepageData } from "../data/DummyData";
import { TodoContext } from "../context/todoProvider";

const Dashboard = () => {
  const todoContext = React.useContext(TodoContext);

  const { todos } = todoContext || { todos: [] };
  return (
    <>
      <div className=" max-w-80 ">
        <div className="bg-white shadow-md p-5 m-5 rounded-lg ">
          <h1 className="font-bold md:text-2xl">Dashboard.io</h1>
          <p className="text-gray-500">Welcome to your Dashboard</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        {homepageData.map((data, index) => {
          return (
            <div key={index} className="bg-white shadow-md p-10 rounded-lg">
              <h1 className="font-bold md:text-2xl">{data.title}</h1>
              <p className="text-gray-500">{data.description}</p>
            </div>
          );
        })}
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-4">
          <div className="bg-white shadow-md p-5 rounded-lg hover:shadow-lg transition-shadow">
            <div>
              <p className="text-2xl font-medium mb-14"> Weather</p>
              <span className="text-sm text-blue-400 font-light">
                View the weather in the most common cities of the U.S
              </span>
            </div>
          </div>

          <div className="bg-white shadow-md p-5 rounded-lg   hover:shadow-lg transition-shadow">
            <div>
              {todos.slice(0, 1).map((todo, i) => (
                <div className="flex flex-col" key={i}>
                  <span className="text-2xl font-medium">
                    Task: {todo.title}
                  </span>
                  <span className="text-sm text-gray-400 font-light">
                    {todo.description}
                  </span>
                  <span className="mt-10 font-light text-blue-500 text-sm">
                    View all your other tasks
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white shadow-md p-5 rounded-lg  hover:shadow-lg transition-shadow">
            <div>
              <p className="text-2xl font-medium mb-14">Read the News</p>
              <span className=" font-light text-blue-400 text-sm">
                Read different articles revolving around different topics
              </span>
            </div>
          </div>
          <div className="bg-white shadow-md p-5 rounded-lg hover:shadow-lg transition-shadow">
            <div>
              <p className="text-2xl font-medium mb-14">Contacts</p>
              <span className="font-light text-blue-400 text-sm">
                View and access your contacts
              </span>
            </div>
          </div>
          <div className="bg-white shadow-md p-5 rounded-lg md:col-span-2 lg:col-span-2 flex  hover:shadow-lg transition-shadow">
            <div>
              <p className="text-2xl font-medium mb-14">Settings</p>
              <span className="font-light text-blue-400 text-sm">
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
