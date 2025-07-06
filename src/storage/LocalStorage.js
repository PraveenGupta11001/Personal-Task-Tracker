export const getUsername = () => {
  try {
    return localStorage.getItem('username');
  } catch (error) {
    console.error('Error reading username from localStorage:', error);
    return null;
  }
};

export const setUsername = (username) => {
  try {
    localStorage.setItem('username', username);
  } catch (error) {
    console.error('Error saving username to localStorage:', error);
  }
};

export const getTasks = (username) => {
  try {
    const allTasks = localStorage.getItem('tasks');
    const tasksObj = allTasks ? JSON.parse(allTasks) : {};
    return tasksObj[username] || [];
  } catch (error) {
    console.error('Error reading tasks from localStorage:', error);
    return [];
  }
};

export const setTasks = (username, tasks) => {
  try {
    const allTasks = localStorage.getItem('tasks');
    const tasksObj = allTasks ? JSON.parse(allTasks) : {};
    tasksObj[username] = tasks;
    localStorage.setItem('tasks', JSON.stringify(tasksObj));
  } catch (error) {
    console.error('Error saving tasks to localStorage:', error);
  }
};

export const clearStorage = () => {
  try {
    localStorage.removeItem('username');
    localStorage.removeItem('theme');
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
};