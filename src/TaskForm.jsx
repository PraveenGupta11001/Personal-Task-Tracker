import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');
  const [dueDate, setDueDate] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask({
        id: uuidv4(),
        title,
        description,
        priority,
        dueDate,
        category,
        completed: false,
      });
      setTitle('');
      setDescription('');
      setPriority('Low');
      setDueDate('');
      setCategory('');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Add Task</h2>
      <div onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-1">Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-1">Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-1">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-300"
        >
          Add Task
        </button>
      </div>
    </div>
  );
}

export default TaskForm;