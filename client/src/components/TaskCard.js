import React from "react";
import { CheckCircle } from "lucide-react";

export default function TaskCard({
  task,
  handleDeleteTask,
  handleChangeStatus,
}) {
  const handleDeleteButtonClick = () => {
    handleDeleteTask(task._id);
  };
  const handleChange = (newStatus) => {
    handleChangeStatus(task._id, newStatus);
  };

  return (
    <div className="bg-white font-body rounded-lg shadow p-6 mb-6">
      <div className="flex gap-2 items-center justify-between">
        <h3 className="font-heading text-xl font-semibold mb-4 flex items-center gap-2">
          <CheckCircle className="text-silver-900" />
          {task.title}
        </h3>
        <div className="flex justify-between items-center mb-4">
          <p>{task.status}</p>
          <select
            value={task.status}
            onChange={(e) => handleChange(e.target.value)}
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        </div>
        <div>
          <p className="text-base text-stone-700">{task.description}</p>
        </div>

        <button
          onClick={() => handleDeleteButtonClick()}
          className="bg-red-500 text-white py-1 px-2 rounded mt-2"
        >
          Delete
        </button>
      
    </div>
  );
}
