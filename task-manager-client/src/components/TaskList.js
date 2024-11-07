import React, { useEffect, useState } from 'react';
import api from '../api';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const response = await api.get('/tasks');
        setTasks(response.data);
    };

    return (
        <div>
            <h1>Task List</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
