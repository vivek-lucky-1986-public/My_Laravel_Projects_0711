import React, { useEffect, useState } from 'react';

const TaskList = ({ tasks, deleteTask, markAsComplete, setEditTask }) => {
    const [loadingTask, setLoadingTask] = useState(null); //Holds in process task
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <h2>{task.title}</h2>
                    <p>{task.description}</p>
                    <p>Status: {task.completed ? "Completed" : "Incomplete"}</p>
                    <button onClick={() => markAsComplete(task.id)}
                    disabled={loadingTask === task.id || task.completed}
                    >
                    {loadingTask === task.id ? "Processing..." : task.completed
                     ? "Undo Complete" : "Mark As Complete"}
                    </button>
                    {/*<button onClick={() => deleteTask(task.id)}>Delete</button>*/}
                     <button
                        onClick={() => deleteTask(task.id)}
                        disabled={loadingTask === task.id}
                    >
                        {loadingTask === task.id ? "Processing..." : "Delete"}
                    </button>
                    <button onClick={() => setEditTask(task)}>Edit</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
