import React from 'react';

const TaskList = ({ tasks, deleteTask, markAsComplete, setEditTask }) => {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <h2>{task.title}</h2>
                    <p>{task.description}</p>
                    <p>Status: {task.completed ? "Completed" : "Incomplete"}</p>
                    <button onClick={() => markAsComplete(task.id)}>
                        Mark as Complete
                    </button>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                    <button onClick={() => setEditTask(task)}>Edit</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
