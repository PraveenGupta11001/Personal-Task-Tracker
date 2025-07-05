import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || 
           (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      style={{
        padding: '8px',
        borderRadius: '50%',
        backgroundColor: darkMode ? '#4b5563' : '#e5e7eb',
        color: darkMode ? '#ffffff' : '#1f2937',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, color 0.3s ease',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = darkMode ? '#7c3aed' : '#93c5fd';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = darkMode ? '#4b5563' : '#e5e7eb';
      }}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
}

export default DarkModeToggle;