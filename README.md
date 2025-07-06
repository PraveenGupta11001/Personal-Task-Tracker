Personal Task Tracker
Overview
Personal Task Tracker is a modern, user-friendly task management application built with React.js, Vite, and Tailwind CSS. It allows users to log in with a username, manage tasks with details like title, description, priority, due date, and category, and persist their data across sessions using localStorage. The app features a clean, responsive UI with smooth animations, a dark/light mode toggle, and intuitive navigation via tabs for adding and viewing tasks. Each user's tasks are stored separately, ensuring personalized task management.
Features

User Authentication: Simple login system with username stored in localStorage. User-specific tasks persist even after logout, retrievable upon relogin.
Task Management:
Add tasks with title, description, priority (Low, Medium, High), due date, and category.
Edit tasks inline with real-time updates.
Delete tasks with confirmation prompts.
Toggle task completion status.


Task Filtering & Search:
Filter tasks by completion status (All, Completed, Pending) and category.
Search tasks by title or description for quick access.


Dark/Light Mode: Toggle between dark and light themes with persistent state via localStorage, respecting system preferences.
Responsive Design: Optimized for desktop and mobile with Tailwind CSS, featuring smooth animations and hover effects.
Data Persistence: Tasks and usernames are stored in localStorage, with tasks organized by username for multi-user support.
Intuitive UI/UX: 
Welcoming login screen with a polished heading ("Get Started with TaskMaster").
Tabs to switch between task creation and task list views.
Clean forms with focus animations and disabled button states for invalid inputs.



Directory Structure
task-management-app
.
├── eslint.config.js
├── index.html
├── node_modules
│   ├── ...libs
├── package.json
├── package-lock.json
├── postcss.config.cjs
├── public
├── README.md
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   ├── components
│   ├── data
│   ├── index.css
│   ├── main.jsx
│   └── storage
├── tailwind.config.js
└── vite.config.js

Setup Instructions

Clone the Repository:git clone <repository-url>


Navigate to the Project Directory:cd task-management-app


Install Dependencies:npm install

Alternatively, install specific dependencies:npm install react react-dom react-icons uuid vite @vitejs/plugin-react tailwindcss postcss autoprefixer eslint eslint-plugin-react-hooks eslint-plugin-react-refresh


Start the Development Server:npm run dev


Open the Application:Open http://localhost:5173 in your browser.

Deployment
Vercel

Push the repository to GitHub:git add .
git commit -m "Deploy Personal Task Tracker"
git push origin main


Connect the repository to Vercel via the Vercel dashboard and deploy.
Update the Live Demo link in this README with the deployed URL.

GitHub Pages

Install vite-plugin-gh-pages:npm install --save-dev vite-plugin-gh-pages


Update vite.config.js:import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ghPages from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [react(), ghPages()],
  base: '/task-management-app/',
});


Add a deploy script to package.json:"deploy": "vite build && vite gh-pages"


Deploy:npm run deploy


Update the Live Demo link with the GitHub Pages URL.

Technologies Used

React.js: Front-end library for building the UI.
Vite: Fast build tool and development server.
Tailwind CSS: Utility-first CSS framework for styling.
uuid: Generates unique IDs for tasks.
react-icons: Provides icons for edit, delete, and dark/light mode toggle.
ESLint: Ensures code quality with React-specific linting rules.
PostCSS & Autoprefixer: Enhances CSS compatibility and processing.

Usage

Login: Enter a username to log in. The username is stored in localStorage, and any existing tasks for that user are loaded.
Add Tasks: Use the "Add Task" tab to create tasks with title, description, priority, due date, and category.
View Tasks: Switch to the "Task List" tab to view, edit, delete, or mark tasks as completed.
Filter & Search: Use the filter dropdowns and search bar to find specific tasks.
Dark/Light Mode: Toggle between themes using the sun/moon icon.
Logout: Clears the current session (username and theme) while preserving tasks for future logins.

Data Persistence

Tasks are stored in localStorage under the user’s username (e.g., { "user1": [task1, task2], "user2": [task3] }).
Tasks persist across page refreshes and logouts, retrievable when the same user logs back in.
The LocalStorage.js module handles all storage operations with error handling for robustness.

Screenshots
(To be added after deployment)
Live Demo
[Link to deployed application]
Contributing

Fork the repository.
Create a feature branch: git checkout -b feature/your-feature.
Commit changes: git commit -m "Add your feature".
Push to the branch: git push origin feature/your-feature.
Open a pull request.

License
This project is licensed under the MIT License.
Contact
For issues or suggestions, please open an issue on the GitHub repository.