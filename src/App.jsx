import React, { useState } from 'react';
import { TaskList } from './components/TaskList.jsx';
import './App.css';

const tasks = [
  { id: 1, title: 'Clean my room', completed: false },
  { id: 2, title: 'Wash the dishes', completed: false },
  { id: 3, title: 'Do my homework', completed: true },
  { id: 4, title: 'Buy groceries', completed: false },
  { id: 5, title: 'Go to the gym', completed: false },
];

function App() {
  const [tasksData, setTasksData] = useState(tasks);

  const updateTaskCompletion = (taskId) => {
    const updatedTasks = tasksData.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasksData(updatedTasks);
  };

  return (
    <>
      <h1>Task List</h1>

      <TaskList tasks={tasksData} updateTaskCompletion={updateTaskCompletion} />
    </>
  );
}

export default App;
