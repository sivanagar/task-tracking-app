import { React, useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { ADD_TASK, DELETE_TASK } from "../utils/mutations";
import { QUERY_ME } from "../utils/queries";

import TaskCard from "../components/TaskCard";
import AddTaskForm from "../components/AddTaskForm";

export default function Dashboard() {
  const { loading, data } = useQuery(QUERY_ME);
  const user = data?.me || data?.user || {};
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (user.tasks) {
      setTasks(user.tasks);
    }
  }, [user.tasks]);

  const [addTask, { error }] = useMutation(ADD_TASK);
  const [deleteTask, { error: deleteError }] = useMutation(DELETE_TASK);

  if (loading) {
    return <div>Loading...</div>;
  } else {
  }

  const handleDeleteTask = async (id) => {
    const updatedTasks = tasks.filter((task) => task._id !== id);
    try { 
      const data  = await deleteTask({ variables: { id } });
      if (!data) {
        throw new Error("Something went wrong!");
      }
      setTasks(updatedTasks);
    }
    catch (err) {
      console.error(err);
    }

  };

  const handleChangeStatus = (taskId, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const handleAddTask = async (newTask) => {
    try {
      const { data } = await addTask({
        variables: { ...newTask },
      });
      if (data?.addTask) {
        console.log(data.addTask);
        setTasks([...tasks, data.addTask]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-xl font-semibold text-stone-800 mb-4">Your Tasks</h2>
      <AddTaskForm
        handleAddTask={handleAddTask}
        key={tasks.length}
        id={tasks.length + 1}
      />

      <section>
        {!user?.username && (
          <h4>
            You need to be logged in to see this. Use the navigation links above
            to sign up or log in!
          </h4>
        )}

        {loading ? (
          <div> loading</div>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              handleDeleteTask={handleDeleteTask}
              handleChangeStatus={handleChangeStatus}
            />
          ))
        )}
      </section>
    </div>
  );
}
