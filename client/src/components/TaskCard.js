import React from "react";
import { CheckCircle, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      className={`p-5 rounded-xl shadow-md bg-white hover:shadow-lg transition-shadow duration-200 ease-in-out border-l-4 ${
        task.status === "completed" ? "border-leaf" : "border-melon"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <motion.button whileHover={{ scale: 1.5 }} className=" px-4 py-2 ">
            <button
              onClick={() =>
                handleChange(
                  task.status === "completed" ? "pending" : "completed"
                )
              }
              className={`cursor-pointer ${
                task.status === "completed" ? "text-leaf" : "text-softgray"
              } hover:text-leaf transition-colors`}
            >
              <CheckCircle />
            </button>
          </motion.button>
          <span
            className={`font-body text-charcoal ${
              task.status === "completed" ? "line-through text-softgray" : ""
            }`}
          >
            {task.title}
          </span>
        </div>
        <button
          onClick={() => handleDeleteButtonClick()}
          className="text-softgray hover:text-terracotta transition-colors duration-200"
        >
          <Trash2 />
        </button>
      </div>
      <div className="px-4 py-2">
        {task.description && (
          <p className="text-sm text-softgray mt-1">{task.description}</p>
        )}
      </div>
    </motion.div>
  );
}
