import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default DarkModeToggle;