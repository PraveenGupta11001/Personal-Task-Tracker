import { useState, useEffect } from 'react';
import Login from './Login';
import TaskList from './TaskList';
import { getUsername, setUsername } from './LocalStorage';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsernameState] = useState('');

  useEffect(() => {
    const storedUsername = getUsername();
    if (storedUsername) {
      setUsernameState(storedUsername);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (username) => {
    setUsername(username);
    setUsernameState(username);
    setIsLoggedIn(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      {isLoggedIn ? (
        <TaskList username={username} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;