# Full Stack Blogging Website

This project is a full-stack blogging website built using React Vite as the frontend framework, Appwrite as the Backend as a Service (BaaS) provider, React Redux Toolkit for state management, and React Router for navigation.

## Features

- **Authentication**: User authentication is powered by Appwrite, providing secure and seamless login and registration functionality.

- **CRUD Operations**: Perform Create, Read, Update, and Delete operations on blog posts. Users can create new posts, view existing ones, edit, and delete their posts.

- **State Management**: Utilizes React Redux Toolkit for efficient state management, ensuring a smooth and responsive user experience.

- **Routing**: Navigation between different sections of the application is handled by React Router, enabling a single-page application feel.

## Technologies Used

- **React Vite**: A fast React development environment with instant server start and optimized build.

- **Appwrite**: An open-source BaaS platform providing authentication, database, storage, and other backend services.

- **React Redux Toolkit**: The official, opinionated, batteries-included toolset for efficient Redux development.

- **React Router**: A standard library for routing in React applications.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/KunalBhat55/Blogify.git

   ```

2. Install dependencies:
   ```bash
     cd blogify
     npm install
   ```
3. Configure Appwrite:
    ```bash
    Set up an Appwrite project and obtain API keys.
    Update the .env file with your Appwrite API endpoint and project details.
    see .env.sample for reference
    ```
4.  ```bash
    npm run dev
    ``` 