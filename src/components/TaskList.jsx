import React from 'react';
import { Task } from './Task.jsx';

export function TaskList({ tasks, updateTaskCompletion }) {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          title={task.title}
          completed={task.completed}
          updateTaskCompletion={() => updateTaskCompletion(task.id)}
        />
      ))}
    </div>
  );
}
