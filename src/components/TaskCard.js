import React from 'react';
import './TaskCard.css';

const TaskCard = ({ provided, task }) => {
  return (
    <div
      className="task-card"
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskCard;
