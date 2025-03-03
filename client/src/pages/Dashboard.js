import { React, useState } from "react";
import TaskCard from "../components/TaskCard";

export default function Dashboard() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", description: "general desc..", status: "To-do" },
    {
      id: 2,
      title: "Task 2",
      description: "general desc..",
      status: "completed",
    },
    {
      id: 3,
      title: "Task 3",
      description: "general desc..",
      status: "pending",
    },
  ]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleChangeStatus = (taskId, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: tasks.length + 1,
      title: newTaskTitle,
      description: newTaskDescription,
      status: "To-do",
    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
    setNewTaskDescription("");
    console.log(newTask);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-stone-800 mb-4">
        Task Tracking App
      </h1>
      <section className="max-w-md mx-auto bg-white rounded-lg shadow p-6 m-3">
        <form onSubmit={handleAddTask}>
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
      <section>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            handleDeleteTask={handleDeleteTask}
            handleChangeStatus={handleChangeStatus}
          />
        ))}
      </section>
    </div>
  );
}
