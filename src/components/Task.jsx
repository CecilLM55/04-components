import React from 'react';

export function Task(props) {
  const completedStyle = {
    textDecoration: props.completed ? 'line-through' : 'none',
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={props.completed}
        onChange={() => props.updateTaskCompletion()}
      />
      <label style={completedStyle}>{props.title}</label>
    </div>
  );
}
