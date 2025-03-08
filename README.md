# Task Tracker

A simple, beautiful, and responsive application for creating, organizing, and tracking tasks. Built using **React**, **Tailwind CSS**, and **GraphQL** (Apollo Client).

## Overview

- **Landing Page**: Public home page showcasing the app's purpose and prompting users to log in or sign up.
- **Authentication**: Users can sign up or log in to manage their own tasks.
- **Dashboard**: Main screen where logged-in users can view, add, edit, and delete tasks.
- **Minimalist UI**: Uses Tailwind CSS for consistent spacing, typography, and styling.  
- **Responsive & Animated**: Leverages Framer Motion for subtle transitions, and Lucide icons for a clean aesthetic.

## Features

- **Create & Edit Tasks**: Quickly add or edit tasks from a modern, space-saving modal.
- **Task Status**: Mark tasks as completed or revert them to pending.
- **User Authentication**: Secure login/signup flow with protected routes.
- **Responsive Design**: Works on desktop, tablet, and mobile views seamlessly.
- **Animations & Micro-Interactions**: Smooth hover states, subtle transitions, and modal fade-ins.

## Tech Stack

1. **React** – For building the interactive UI.
2. **Tailwind CSS** – For utility-first styling and layout.
3. **Apollo Client / GraphQL** – For querying and mutating backend data.
4. **Node.js/Express** (if applicable) – For the backend server.
5. **MongoDB** (if applicable) – For storing user and task data.
6. **Framer Motion** – For elegant animations and transitions.
7. **Lucide Icons** – For clean, modern iconography.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/task-tracker.git
cd task-tracker
```


### 2. Install dependencies
```bash 
npm install
# or
yarn install
```

### 3. Configure environment variables
create a .env file in the root directory of server:

```bash
MONGO_URI=''
JWT_SECRET=''
```

### 4. Run the development server

```bash 
npm start
# or
yarn start
```

Open http://localhost:3000 to view it in your browser. The page will reload if you make edits.

### Usage
Visit the Home Page: See a brief overview of the app and how it helps manage tasks.
Sign Up / Log In: Access the dashboard once authenticated.
Dashboard: View all tasks. Use the floating Add Task button to create new tasks.
Edit or Delete: Manage tasks as needed; mark them completed or remove them.

### Project Structure

.
├── src
│   ├── assets          # Images, icons, illustrations
│   ├── components      # Reusable components (TaskCard, NavBar, etc.)
│   ├── pages           # Page-level components (Home, Dashboard, etc.)
│   ├── utils           # GraphQL queries, mutations, auth helper
│   ├── App.js
│   └── index.js
├── package.json
└── README.md

### Contributing
Contributions are welcome! Please open a pull request or issue to discuss changes or features you’d like to add.

### License

MIT License

### Acknowledgments

Tailwind CSS
Framer Motion
Lucide Icons
unDraw / Storyset for placeholder illustrations
GraphQL & Apollo Client




Thank you for checking out Task Tracker!
If you have any questions or suggestions, feel free to open an issue or contribute. Enjoy staying organized with a beautifully simple task management experience!