import { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

function TaskItem({ task, toggleComplete, editTask, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(task.description);
  const [editPriority, setEditPriority] = useState(task.priority);
  const [editDueDate, setEditDueDate] = useState(task.dueDate);
  const [editCategory, setEditCategory] = useState(task.category);

  const handleEdit = () => {
    if (isEditing && editTitle.trim()) {
      editTask(task.id, {
        ...task,
        title: editTitle,
        description: editDescription,
        priority: editPriority,
        dueDate: editDueDate,
        category: editCategory,
      });
    }
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(task.id);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg mb-4 transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
      {isEditing ? (
        <div className="space-y-4">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-transparent focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all duration-300"
          />
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-transparent focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all duration-300"
          ></textarea>
          <select
            value={editPriority}
            onChange={(e) => setEditPriority(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-transparent focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all duration-300"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <input
            type="date"
            value={editDueDate}
            onChange={(e) => setEditDueDate(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-transparent focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all duration-300"
          />
          <input
            type="text"
            value={editCategory}
            onChange={(e) => setEditCategory(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-transparent focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all duration-300"
          />
          <button
            onClick={handleEdit}
            className="bg-gradient-primary text-white font-semibold p-3 rounded-lg hover:bg-purple-700 transition-all duration-300 shadow-md"
          >
            Save
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
              className="w-5 h-5 text-purple-600 rounded focus:ring-purple-400"
            />
            <div>
              <h3
                className={`text-lg font-semibold ${task.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-900 dark:text-white'}`}
              >
                {task.title}
              </h3>
              {task.description && <p className="text-gray-600 dark:text-gray-300 text-sm">{task.description}</p>}
              <p className="text-sm text-gray-500 dark:text-gray-400">Priority: {task.priority}</p>
              {task.dueDate && <p className="text-sm text-gray-500 dark:text-gray-400">Due: {task.dueDate}</p>}
              {task.category && <p className="text-sm text-gray-500 dark:text-gray-400">Category: {task.category}</p>}
            </div>
          </div>
          <div className="flex space-x-3">
            <button onClick={handleEdit} className="text-purple-500 hover:text-purple-700 transition-colors duration-200">
              <FaEdit size={20} />
            </button>
            <button onClick={handleDelete} className="text-red-500 hover:text-red-700 transition-colors duration-200">
              <FaTrash size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskItem;