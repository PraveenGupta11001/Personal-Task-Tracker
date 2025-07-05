import { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && username.trim()) {
      onLogin(username);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md transform transition-all duration-300 hover:shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Login</h2>
        <div onKeyDown={handleKeyPress}>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-200 mb-2 text-sm font-medium" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
              required
              autoFocus
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white font-semibold p-3 rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            disabled={!username.trim()}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;