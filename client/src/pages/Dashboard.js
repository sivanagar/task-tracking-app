import { React, useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "../utils/mutations";
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
  const [editTask, { error: editError }] = useMutation(EDIT_TASK);

  if (loading) {
    return <div>Loading...</div>;
  } else {
  }

  const handleDeleteTask = async (id) => {
    const updatedTasks = tasks.filter((task) => task._id !== id);
    try {
      const data = await deleteTask({ variables: { id } });
      if (!data) {
        throw new Error("Something went wrong!");
      }
      setTasks(updatedTasks);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChangeStatus = async (taskId, newStatus) => {
    console.log("handleChangeStatus", taskId, newStatus);
    try {
      const  editedTask  = await editTask({
        variables: { id: taskId, status: newStatus },
      });

      if (!editedTask) {
        throw new Error("Something went wrong!");
      }
    } catch (err) {
      console.error(err);
    }

    setTasks(
      tasks.map((task) =>
        task._id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const handleAddTask = async (newTask) => {
    try {
      const { data } = await addTask({
        variables: { ...newTask },
      });
      if (data?.addTask) {
        setTasks([...tasks, data.addTask]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-2xl font-bold text-stone-800 mb-4">Your Tasks</h2>
      <p className="font-body text-base">Add your daily tasks easily!</p>
      <AddTaskForm
        handleAddTask={handleAddTask}
        key={tasks.length}
        id={tasks.length + 1}
      />

      <section>
        {!user?.username && (
          <h4 className="font-body text-base">
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
