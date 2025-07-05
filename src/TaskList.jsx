import { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';
import TaskFilter from './TaskFilter';
import DarkModeToggle from './DarkModeToggle';
import { getTasks, setTasks } from './LocalStorage';

function TaskList({ username, onLogout }) {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [activeTab, setActiveTab] = useState('form');

  useEffect(() => {
    const storedTasks = getTasks();
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    setTasks(tasks);
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
    setActiveTab('list');
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === 'Completed') return task.completed;
      if (filter === 'Pending') return !task.completed;
      return true;
    })
    .filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase())
    )
    .filter((task) =>
      categoryFilter ? task.category.toLowerCase() === categoryFilter.toLowerCase() : true
    );

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
          Welcome, {username}!
        </h1>
        <div className="flex items-center space-x-4">
          <DarkModeToggle />
          <button
            onClick={onLogout}
            className="bg-red-500 text-white font-semibold p-2 rounded-lg hover:bg-red-600 transition-all duration-300"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="mb-6">
        <div className="flex border-b border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setActiveTab('form')}
            className={`px-4 py-2 text-sm font-medium ${activeTab === 'form' ? 'border-b-2 border-purple-500 text-purple-600 dark:text-purple-400' : 'text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400'} transition-colors duration-200`}
          >
            Add Task
          </button>
          <button
            onClick={() => setActiveTab('list')}
            className={`px-4 py-2 text-sm font-medium ${activeTab === 'list' ? 'border-b-2 border-purple-500 text-purple-600 dark:text-purple-400' : 'text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400'} transition-colors duration-200`}
          >
            Task List
          </button>
        </div>
      </div>
      {activeTab === 'form' ? (
        <TaskForm addTask={addTask} />
      ) : (
        <>
          <TaskFilter
            filter={filter}
            setFilter={setFilter}
            search={search}
            setSearch={setSearch}
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            categories={[...new Set(tasks.map((task) => task.category).filter(Boolean))]}
          />
          <div className="space-y-4">
            {filteredTasks.length ? (
              filteredTasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  toggleComplete={toggleComplete}
                  editTask={editTask}
                  deleteTask={deleteTask}
                />
              ))
            ) : (
              <p className="text-center text-gray-500 dark:text-gray-400">No tasks found.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default TaskList;