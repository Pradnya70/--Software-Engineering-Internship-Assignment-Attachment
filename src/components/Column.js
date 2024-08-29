import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';

const Column = ({ columnId, tasks, title }) => (
  <div className="column">
    <h2>{title}</h2>
    <Droppable droppableId={columnId}>
      {(provided) => (
        <div className="task-list" ref={provided.innerRef} {...provided.droppableProps}>
          {tasks.map((task, index) => (
            <TaskCard key={task.id} task={task} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </div>
);

export default Column;
