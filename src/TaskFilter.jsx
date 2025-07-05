import React from 'react';

function TaskFilter({ filter, setFilter, search, setSearch, categoryFilter, setCategoryFilter, categories }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg mb-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
      <div className="flex-1">
        <label className="block text-gray-700 dark:text-gray-200 mb-2 text-sm font-medium">Search</label>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-transparent focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all duration-300"
          placeholder="Search tasks..."
        />
      </div>
      <div className="flex-1">
        <label className="block text-gray-700 dark:text-gray-200 mb-2 text-sm font-medium">Filter</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-transparent focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all duration-300"
        >
          <option>All</option>
          <option>Completed</option>
          <option>Pending</option>
        </select>
      </div>
      <div className="flex-1">
        <label className="block text-gray-700 dark:text-gray-200 mb-2 text-sm font-medium">Category</label>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-transparent focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all duration-300"
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