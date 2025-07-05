export const getUsername = () => {
  return localStorage.getItem('username');
};

export const setUsername = (username) => {
  localStorage.setItem('username', username);
};

export const getTasks = () => {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
};

export const setTasks = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const clearStorage = () => {
  localStorage.removeItem('username');
  localStorage.removeItem('tasks');
  localStorage.removeItem('theme');
};