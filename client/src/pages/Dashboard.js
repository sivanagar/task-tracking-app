import { React, useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "../utils/mutations";
import { QUERY_ME } from "../utils/queries";

import TaskCard from "../components/TaskCard";
// import AddTaskForm from "../components/AddTaskForm";
import TaskFormModal from "../components/TaskFormModal";

import { ClipboardCheck } from "lucide-react";

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
    try {
      const editedTask = await editTask({
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
    <div className="container min-h-screen px-6 py-8 md:px-12 lg:px-20">
      <header className="mb-8 flex items-center justify-between">
        <h2 className="font-heading text-3xl font-semibold text-taupe flex items-center gap-2">
          <ClipboardCheck className="text-melon" /> My Tasks
        </h2>
       
        {/* <button className="flex items-center gap-2 bg-melon text-isabelline px-4 py-2 rounded-xl hover:bg-amber-700 transition ease-in-out duration-300">
          <Plus className="w-5 h-5" /> New Task
        </button> */}
      </header>
      {/* <AddTaskForm
        handleAddTask={handleAddTask}
        key={tasks.length}
        id={tasks.length + 1}
      /> */}

      <section>
        {loading ? (
          <div className="text-softgray font-body">Loading tasks...</div>
        ) : user?.username ? (<>
         {(error || deleteError || editError) && (
  <p className="mt-2 text-sm text-red-600 bg-red-100 border border-red-400 p-2 rounded-md">
    ⚠️ Action failed: {error.message} {deleteError.message} {editError.message}
  </p>
)}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {tasks.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                handleDeleteTask={handleDeleteTask}
                handleChangeStatus={handleChangeStatus}
              />
            ))}
          </div>
          <TaskFormModal handleAddTask={handleAddTask} />
        </>
          
        ) : (
          <div className="mt-6 font-body text-softgray">
            You need to be logged in to see this. Use the navigation links above
            to sign up or log in!
          </div>
        )}
      
      </section>
    </div>
  );
}
