import { useRef, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import caretleft from "../assets/caret-left.svg";

interface TodoItem {
  id: string;
  title: string;
  description: string;
  time: string;
}

const EditTodo = () => {
  const { id } = useParams<{ id: string }>(); // Get the ID from the route parameters
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const timeRef = useRef<HTMLSelectElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the existing todo item from localStorage
    const storedTodoList: TodoItem[] = JSON.parse(
      localStorage.getItem("todoList") || "[]"
    );
    const todoItem = storedTodoList.find((item) => item.id === id);

    if (todoItem) {
      // Pre-fill the form with the existing values
      if (titleRef.current) titleRef.current.value = todoItem.title;
      if (descRef.current) descRef.current.value = todoItem.description;
      if (timeRef.current) timeRef.current.value = todoItem.time;
    }
  }, [id]);

  const handleSave = () => {
    // Update the todo item in localStorage
    const storedTodoList: TodoItem[] = JSON.parse(
      localStorage.getItem("todoList") || "[]"
    );
    const updatedTodoList = storedTodoList.map((item) =>
      item.id === id
        ? {
            ...item,
            title: titleRef.current?.value || "",
            description: descRef.current?.value || "",
            time: timeRef.current?.value || "",
          }
        : item
    );

    localStorage.setItem("todoList", JSON.stringify(updatedTodoList));
    navigate("/todolist"); // Navigate back to the to-do list page
  };

  const timeArray = Array.from(
    { length: 24 },
    (_, i) => `${i.toString().padStart(2, "0")}:00`
  );

  return (
    <>
      <Link to="/todolist">
        <div className="mb-[52px]">
          <img src={caretleft} alt="chevron" />
        </div>
      </Link>
      <div className="pl-2 text-lg font-medium mb-6 bg-blue-gradient bg-clip-text text-transparent">
        Edit Task
      </div>

      <div>
        <input
          ref={titleRef}
          className="edit-input mb-4"
          type="text"
          placeholder="Task Title"
        />
        <textarea
          ref={descRef}
          className="textarea-input pt-2"
          name=""
          id=""
          placeholder="Task Description"
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
          Save Task
        </button>
      </div>
    </>
  );
};

export default EditTodo;
