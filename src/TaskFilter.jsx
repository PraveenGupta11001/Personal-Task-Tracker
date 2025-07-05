import React from 'react';

function TaskFilter({ filter, setFilter, search, setSearch, categoryFilter, setCategoryFilter, categories }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg mb-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
      <div className="flex-1">
        <label className="block text-gray-700 dark:text-gray-300 mb-1">Search</label>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
          placeholder="Search tasks..."
        />
      </div>
      <div className="flex-1">
        <label className="block text-gray-700 dark:text-gray-300 mb-1">Filter</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
        >
          <option>All</option>
          <option>Completed</option>
          <option>Pending</option>
        </select>
      </div>
      <div className="flex-1">
        <label className="block text-gray-700 dark:text-gray-300 mb-1">Category</label>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default TaskFilter;