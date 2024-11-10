# Task Management App

A simple, full-stack **Task Management Application** built with **Laravel**, **React**, and **MongoDB**. This app allows users to manage tasks, with features such as adding, editing, deleting, and viewing tasks. It is built as a learning project to demonstrate how to integrate Laravel with React and MongoDB.

---

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Installation](#installation)
    - [Backend (Laravel)](#backend-laravel)
    - [Frontend (React)](#frontend-react)
5. [Usage](#usage)
6. [Environment Configuration](#environment-configuration)
7. [API Documentation](#api-documentation)
8. [Contributors](#contributors)
9. [License](#license)

---

## Introduction

This is a full-stack **Task Management App** that allows you to:

- Add, update, and delete tasks
- Organize tasks with descriptions
- Use MongoDB for storing task data
- Enjoy a reactive front-end built with React

It uses **Laravel** as the backend API and **React** for building the user interface, all connected to a **MongoDB** database for data storage.

---

## Features

- **Task Management**: Create, update, and delete tasks with titles and descriptions.
- **Real-time Updates**: View tasks in real-time with automatic UI updates.
- **Authentication**: Sign up, log in, and log out (if you plan to add auth features).
- **Responsive UI**: Built with React and styled to look good on any device.
- **RESTful API**: Backend built in Laravel with RESTful routes to handle tasks.

---

## Tech Stack

- **Frontend**: React.js, Axios for HTTP requests, React Router for routing
- **Backend**: Laravel, MongoDB (via `mongodb/laravel-mongodb` package)
- **Database**: MongoDB Atlas (or local MongoDB for development)
- **Authentication (optional)**: JWT or Laravel Passport for user authentication

---

## Installation

### Backend (Laravel)

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/task-management-app.git
   cd task-management-app
   ```

2. Install PHP dependencies using Composer:

   ```bash
   composer install
   ```

3. Set up your **.env** file. Copy the `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

4. Configure MongoDB database in your `.env` file:

   ```dotenv
   DB_CONNECTION=mongodb
   ## MongoDB Atlas
   DB_HOST=<MongoDB_Atlas_Host>
   DB_PORT=27017
   DB_DATABASE=tasksmgmtdb
   DB_USERNAME=<MongoDB_Username>
   DB_PASSWORD=<MongoDB_Password>
   ```

   If you're using MongoDB Atlas, update the `DB_HOST` with your Atlas connection string.

5. Run the migrations (if you have any):

   ```bash
   php artisan migrate
   ```

6. Serve the Laravel application:

   ```bash
   php artisan serve
   ```

### Frontend (React)

1. Go to the `frontend` directory:

   ```bash
   cd frontend
   ```

2. Install Node.js dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file for the React app, and set the backend API URL:

   ```env
   REACT_APP_API_URL=http://127.0.0.1:8000/api
   ```

4. Run the React development server:

   ```bash
   npm start
   ```

5. The React app will now be running at `http://localhost:3000`.

---

## Usage

Once everything is set up, you can navigate to the React app in your browser (`http://localhost:3000`) and interact with the task management system. You will be able to:

- View all tasks in the list
- Add a new task with a title and description
- Edit or delete tasks
- (If authentication is implemented) Register, log in, and log out

---

## Environment Configuration

Make sure to configure the following in your `.env` files:

### Laravel Backend

- **MongoDB Connection**: Ensure the `DB_CONNECTION=mongodb` and the MongoDB credentials (host, port, username, password) are correctly set.
- **Other Laravel Settings**: Configure mail, session, and caching settings as per your application's needs.

### React Frontend

- **API URL**: Set the **`REACT_APP_API_URL`** environment variable to point to your Laravel API (e.g., `http://localhost:8000/api`).

---

## API Documentation

This section would include details of your backend routes and API endpoints. For example:

### Endpoints

#### Get All Tasks

- **Method**: `GET`
- **URL**: `/api/tasks`
- **Response**: Returns an array of tasks

#### Create Task

- **Method**: `POST`
- **URL**: `/api/tasks`
- **Body**:
  ```json
  {
    "title": "New Task",
    "description": "A detailed task description"
  }
  ```
- **Response**: Returns the created task object.

#### Update Task

- **Method**: `PUT`
- **URL**: `/api/tasks/{id}`
- **Body**:
  ```json
  {
    "title": "Updated Task",
    "description": "Updated task description"
  }
  ```

#### Delete Task

- **Method**: `DELETE`
- **URL**: `/api/tasks/{id}`
- **Response**: Returns a success message.

#### Mark Task as Complete

**Endpoint**: `PATCH /api/tasks/{id}/complete`

**Description**: This endpoint toggles the completion status of a specific task. If the task is marked as incomplete, it will be set to complete, and vice versa.

**Request Parameters**:

- **Path Parameter**:
  - `id` (integer, required): The ID of the task to be marked as complete.

**Request Example**:

```http
PATCH /api/tasks/1/complete
```

**Response**:

- **Status Code**: `200 OK`
- **Response Body**:
  - Returns the updated task object with the `completed` field toggled.

**Response Example**:

```json
{
    "id": 1,
    "title": "Complete project",
    "description": "Finish all pending tasks",
    "completed": true,
    "created_at": "2024-11-10T10:00:00.000000Z",
    "updated_at": "2024-11-10T12:00:00.000000Z"
}
```

**Error Responses**:

- `404 Not Found`: Returned if the task with the given `id` does not exist.

**Notes**:

- This endpoint toggles the `completed` status of the task.
- You can call this endpoint repeatedly to toggle between "complete" and "incomplete" states for a task.

---

## Contributors

- [VIVEK SHAH](https://github.com/vivek-lucky-1986-public)
- Contributions welcome!

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
