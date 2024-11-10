import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, updateTask, editTask, setEditTask }) => {
    const [task, setTask] = useState({ title: '', description: '' });

    // Update form fields if editTask changes
    useEffect(() => {
        if (editTask) {
            setTask(editTask);
        } else {
            setTask({ title: '', description: '' });
        }
    }, [editTask]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editTask) {
            updateTask(task); // Call updateTask if editing
        } else {
            addTask(task); // Call addTask if adding new task
        }

        setTask({ title: '', description: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{editTask ? "Edit Task" : "Add New Task"}</h2>
            <input
                type="text"
                placeholder="Title"
                value={task.title}
                onChange={(e) => setTask({ ...task, title: e.target.value })}
                required
            />
            <textarea
                placeholder="Description"
                value={task.description}
                onChange={(e) => setTask({ ...task, description: e.target.value })}
            ></textarea>
            <button type="submit">{editTask ? "Update Task" : "Add Task"}</button>
            {editTask && <button onClick={() => setEditTask(null)}>Cancel</button>}
        </form>
    );
};

export default TaskForm;
