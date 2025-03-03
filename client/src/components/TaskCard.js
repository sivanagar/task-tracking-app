import React from "react";

export default function TaskCard({
  task,
  handleDeleteTask,
  handleChangeStatus,
}) {
  const handleDeleteButtonClick = () => {
    handleDeleteTask(task.id);
  };
  const handleChange = (newStatus) => {
    handleChangeStatus(task.id, newStatus);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h3 className="text-xl font-semibold mb-4">{task.title}</h3>
      <p className="text-base text-stone-700">{task.description}</p>
      <div className="flex justify-between items-center mt-4">
       <p>{task.status}</p>
      <select
        value={task.status}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <br />
      <button
        onClick={() => handleDeleteButtonClick()}
        className="bg-red-500 text-white py-1 px-2 rounded mt-2"
      >
        Delete
      </button>
      </div>
    </div>
  );
}
