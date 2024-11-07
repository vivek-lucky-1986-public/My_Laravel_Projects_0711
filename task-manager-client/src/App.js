import React from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';  // If using App.css for styling

function App() {
    return (
        <div className="App">
            <TaskForm />
            <TaskList />
        </div>
    );
}

export default App;
