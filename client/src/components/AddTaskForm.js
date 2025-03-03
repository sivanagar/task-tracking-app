import {React, useState} from "react";

export default function AddTaskForm({ handleAddTask, id }) {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  const handleButtonClick = (e) => {
    e.preventDefault();
    const newTask = {
      id: id,
      title: newTaskTitle,
      description: newTaskDescription,
      status: "To-do",
    };
    handleAddTask(newTask);
    setNewTaskTitle("");
    setNewTaskDescription("");
    console.log(newTask);
  };

  return (
    <section className="max-w-md mx-auto bg-white rounded-lg shadow p-6 m-3">
      <form onSubmit={handleButtonClick}>
        <div>
          <label className="block mb-2 text-stone-700">Title</label>
          <input
            type="text"
            placeholde="task title"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            required
            className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-200"
          />
        </div>
        <div>
          <label className="block mb-2 text-stone-700">Description</label>
          <textarea
            type="textarea"
            placeholde="task description"
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
            className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-200"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Add Task
        </button>
      </form>
    </section>
  );
}
