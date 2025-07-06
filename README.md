# Personal Task Tracker

## Overview

**Personal Task Tracker** is a modern, user-friendly task management app built with **React.js**, **Vite**, and **Tailwind CSS**. Users can log in with a username, manage tasks (title, description, priority, due date, category), and persist data across sessions using `localStorage`.

It features a responsive UI, dark/light mode toggle, smooth animations, and intuitive tab-based navigation. Each user’s tasks are stored separately to ensure personalized task management.


---

## 🔗 Live Demo

👉 [View the Live App](https://personal-task-tracker-sepia.vercel.app/)
---



## ✅ Features

### User Authentication

* Simple login system using `localStorage`.
* User-specific tasks persist across sessions.

### Task Management

* Add tasks with title, description, priority (Low/Medium/High), due date, and category.
* Edit tasks inline.
* Delete tasks with confirmation.
* Toggle task completion status.

### Task Filtering & Search

* Filter by status: All / Completed / Pending.
* Filter by category.
* Search by task title or description.

### Dark/Light Mode

* Toggle between dark and light themes.
* Respects system preference and stores choice in `localStorage`.

### Responsive Design

* Optimized for desktop and mobile using Tailwind CSS.
* Smooth animations and interactive UI.

### Data Persistence

* Tasks and username saved in `localStorage`.
* Supports multiple users (based on username).

### Intuitive UX

* Welcoming login screen ("Get Started with TaskMaster").
* Tabs for task creation and viewing.
* Clean forms, error validation, and disabled states.

---

## 📁 Directory Structure

```
task-management-app
├── eslint.config.js
├── index.html
├── node_modules/
├── package.json
├── package-lock.json
├── postcss.config.cjs
├── public/
├── README.md
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── index.css
│   ├── main.jsx
│   └── storage/
├── tailwind.config.js
└── vite.config.js
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd task-management-app
```

### 2. Install Dependencies

```bash
npm install
```

Or manually install:

```bash
npm install react react-dom react-icons uuid vite @vitejs/plugin-react tailwindcss postcss autoprefixer eslint eslint-plugin-react-hooks eslint-plugin-react-refresh
```

### 3. Start the Development Server

```bash
npm run dev
```

Then open `http://localhost:5173` in your browser.

---

## 🚀 Deployment

### 🔹 Vercel

1. Push code to GitHub:

```bash
git add .
git commit -m "Deploy Personal Task Tracker"
git push origin main
```

2. Connect the repo to Vercel and deploy via [Vercel Dashboard](https://vercel.com/dashboard).

### 🔸 GitHub Pages

1. Install the plugin:

```bash
npm install --save-dev vite-plugin-gh-pages
```

2. Update `vite.config.js`:

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ghPages from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [react(), ghPages()],
  base: '/task-management-app/',
});
```

3. Add deploy script in `package.json`:

```json
"scripts": {
  "deploy": "vite build && vite gh-pages"
}
```

4. Deploy:

```bash
npm run deploy
```

---

## 🛠 Technologies Used

* **React.js** – Component-based UI
* **Vite** – Lightning-fast dev server & bundler
* **Tailwind CSS** – Utility-first CSS framework
* **uuid** – For generating unique task IDs
* **react-icons** – Icons for edit/delete/theme toggle
* **ESLint** – Linting and code quality
* **PostCSS & Autoprefixer** – CSS compatibility

---

## Usage

* **Login**: Enter a username to access or create a task list.
* **Add Tasks**: Use the "Add Task" tab to add tasks.
* **View/Edit/Delete**: Use the "Task List" tab to manage tasks.
* **Filter & Search**: Find tasks easily using filters or keywords.
* **Theme Toggle**: Use sun/moon icon to toggle theme.
* **Logout**: Clears session but retains tasks in storage.

---

## Data Persistence

* Tasks are stored in `localStorage` under the user’s name.
* Example:

```json
{
  "user1": [{...}, {...}],
  "user2": [{...}]
}
```

* Handled through a reusable `LocalStorage.js` module with error handling.

---

## 🖼️ Screenshots

![image](https://github.com/user-attachments/assets/0c3ef2af-bede-451c-9ee9-1136dae32d4f)

![image](https://github.com/user-attachments/assets/1a4f0928-35fa-43e0-9130-44c27c95bc31)

![image](https://github.com/user-attachments/assets/0fd3cf2d-0e05-45f0-a662-b3c6ad3a704a)

---

## 🤝 Contributing

1. Fork the repository.

2. Create a new branch:

   ```bash
   git checkout -b feature/your-feature
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add your feature"
   ```

4. Push to GitHub:

   ```bash
   git push origin feature/your-feature
   ```

5. Open a pull request!

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 📬 Contact

For issues, suggestions, or improvements, please [open an issue](mailto:praweengupta11001@gmail.com).
