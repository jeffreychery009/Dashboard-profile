import { useRef } from "react";
import caretleft from "../assets/caret-left.svg";
import { Link, useNavigate } from "react-router-dom";

interface TodoItem {
  id: string;
  title: string;
  description: string;
  time: string;
}

const TodoPage = () => {
  const timeArray = Array.from(
    { length: 24 },
    (_, i) => `${i.toString().padStart(2, "0")}:00`
  );

  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const timeRef = useRef<HTMLSelectElement>(null);
  const navigate = useNavigate();

  const handleSave = () => {
    const newTask: TodoItem = {
      id: Date.now().toString(),
      title: titleRef.current?.value || "",
      description: descRef.current?.value || "",
      time: timeRef.current?.value || "",
    };
    const storedTodList = JSON.parse(localStorage.getItem("todoList") || "[]");
    storedTodList.push(newTask);
    localStorage.setItem("todoList", JSON.stringify(storedTodList));

    // Navigate back to the to-do list page

    navigate("/todolist");
  };

  return (
    <>
      <Link to="/todolist">
        <div className="mb-[52px]">
          <img src={caretleft} alt="chevron" />
        </div>
      </Link>
      <div className="mb-6">Create a New Task</div>

      <div>
        <input ref={titleRef} className="edit-input mb-4" type="text" />
        <textarea
          ref={descRef}
          className="textarea-input"
          name=""
          id=""
        ></textarea>
      </div>
      <div className="mt-4">
        <select ref={timeRef} name="" id="">
          <option>Time</option>
          {timeArray.map((time, index) => (
            <option key={index}>{time}</option>
          ))}
        </select>
      </div>
      <div>
        <button
          onClick={handleSave}
          className="flex justify-center items-center h-[50px] w-[180px] rounded-[30px] border border-blue bg-white mt-5 mx-auto"
        >
          Add New Task
        </button>
      </div>
    </>
  );
};

export default TodoPage;
