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
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg mb-6 transform transition-all duration-500">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Add New Task</h2>
      <div onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 dark:text-gray-200 mb-2 text-sm font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-transparent focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all duration-300"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-200 mb-2 text-sm font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-transparent focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all duration-300"
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-200 mb-2 text-sm font-medium">Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-transparent focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all duration-300"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-200 mb-2 text-sm font-medium">Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-transparent focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all duration-300"
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-200 mb-2 text-sm font-medium">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-transparent focus:border-purple-400 focus:ring-2 focus:ring-purple-四大00/50 transition-all duration-300"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-primary bg-gray-700 text-white font-semibold p-3 rounded-lg hover:bg-purple-700 transition-all duration-300 shadow-md"
        >
          Add Task
        </button>
      </div>
    </div>
  );
}

export default TaskForm;