import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const apiUrl = 'http://localhost:8000/api/tasks';

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);
    const [editTask, setEditTask] = useState(null); // Holds the task being edited
    useEffect(() => {
        // Change the document title when the component mounts
        document.title = "Task Manager App";
    }, []);

    // Fetch tasks from the API
    const fetchTasks = async () => {
        const response = await axios.get(apiUrl);
        setTasks(response.data);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    // Add a new task
    const addTask = async (task) => {
        const response = await axios.post(apiUrl, {...task, completed: false});
        setTasks([...tasks, response.data]);
    };

    // Update an existing task
    const updateTask = async (updatedTask) => {
        const response = await axios.put(`${apiUrl}/${updatedTask.id}`, updatedTask);
        setTasks(tasks.map(task => task.id === updatedTask.id ? response.data : task));
        setEditTask(null); // Clear edit mode
    };

    // Delete a task
    const deleteTask = async (id) => {
        await axios.delete(`${apiUrl}/${id}`);
        setTasks(tasks.filter(task => task.id !== id));
    };

    // Mark a task as complete
    const markAsComplete = async (id) => {
        const response = await axios.patch(`${apiUrl}/${id}/complete`);
        setTasks(tasks.map(task => task.id === id ? response.data : task));
    };

    return (
        <div>
            <h1>Task Manager</h1>

            {/* Task Form for adding or editing tasks */}
            <TaskForm
                addTask={addTask}
                updateTask={updateTask}
                editTask={editTask}
                setEditTask={setEditTask}
            />

            {/* Task List displaying all tasks */}
            <TaskList
                tasks={tasks}
                deleteTask={deleteTask}
                markAsComplete={markAsComplete}
                setEditTask={setEditTask}
            />
        </div>
    );
};

export default TaskManager;
