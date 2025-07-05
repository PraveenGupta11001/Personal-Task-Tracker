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
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-4 transition-transform transform hover:scale-105">
      {isEditing ? (
        <div className="space-y-4">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          />
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          ></textarea>
          <select
            value={editPriority}
            onChange={(e) => setEditPriority(e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <input
            type="date"
            value={editDueDate}
            onChange={(e) => setEditDueDate(e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          />
          <input
            type="text"
            value={editCategory}
            onChange={(e) => setEditCategory(e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          />
          <button
            onClick={handleEdit}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Save
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
              className="mr-2"
            />
            <div>
              <h3
                className={`text-lg font-semibold ${task.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-900 dark:text-white'}`}
              >
                {task.title}
              </h3>
              {task.description && <p className="text-gray-600 dark:text-gray-300">{task.description}</p>}
              <p className="text-sm text-gray-500 dark:text-gray-400">Priority: {task.priority}</p>
              {task.dueDate && <p className="text-sm text-gray-500 dark:text-gray-400">Due: {task.dueDate}</p>}
              {task.category && <p className="text-sm text-gray-500 dark:text-gray-400">Category: {task.category}</p>}
            </div>
          </div>
          <div className="flex space-x-2">
            <button onClick={handleEdit} className="text-blue-500 hover:text-blue-700">
              <FaEdit />
            </button>
            <button onClick={handleDelete} className="text-red-500 hover:text-red-700">
              <FaTrash />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskItem;