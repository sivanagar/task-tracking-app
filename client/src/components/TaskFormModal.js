import React, { useState } from "react";
import { PlusCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TaskFormModal({ handleAddTask }) {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTask({ title, description });
    setTitle("");
    setDescription("");
    setShowForm(false);
  };

  return (
    <>
      <button
        onClick={() => setShowForm(true)}
        className="fixed bottom-8 right-8 bg-melon text-isabelline p-3 rounded-full shadow-lg hover:bg-terracotta transition ease-in-out duration-300"
      >
        <PlusCircle />
      </button>

      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-taupe-200 bg-opacity-50 backdrop-blur-sm flex items-center justify-center"
          >
            <motion.form
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-white rounded-xl shadow-xl p-6 relative max-w-sm w-full"
              onSubmit={handleSubmit}
            >
              <button
                type="button"
                className="absolute top-2 right-2 text-softgray hover:text-taupe transition"
                onClick={() => setShowForm(false)}
              >
                <X />
              </button>

              <h2 className="font-heading text-2xl text-taupe mb-4">Add Task</h2>

              <input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full border border-silver rounded-md px-4 py-2 mb-3 text-charcoal focus:border-melon focus:outline-none"
              />

              <textarea
                placeholder="Task Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border border-silver rounded-md px-4 py-2 mb-4 text-charcoal focus:border-melon focus:outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-melon text-isabelline px-4 py-2 rounded-lg hover:bg-amber-700 transition duration-200"
              >
                Save Task
              </button>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
