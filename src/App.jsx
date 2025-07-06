import { useState, useEffect } from 'react';
import Login from './components/Login';
import TaskList from './components/TaskList';
import { getUsername, setUsername, clearStorage } from './storage/LocalStorage';
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

  const handleLogout = () => {
    clearStorage(username);
    setUsernameState('');
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen bg-primary-light dark:bg-primary-dark transition-colors duration-500">
      {isLoggedIn ? (
        <TaskList username={username} onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;