import { React, useState } from "react";
import TaskCard from "../components/TaskCard";
import AddTaskForm from "../components/AddTaskForm";

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

  const handleAddTask = (newTask) => {
    
    setTasks([...tasks, newTask]);
    
    console.log("Added Task", newTask);
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-xl font-semibold text-stone-800 mb-4">
        Your Tasks
      </h2>
        <AddTaskForm handleAddTask={handleAddTask} key= {tasks.length} id={tasks.length+1}/>
       
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
