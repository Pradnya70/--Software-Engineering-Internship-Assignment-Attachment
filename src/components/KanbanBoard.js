import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';
import AddTaskModal from './AddTaskModal';
import { moveTask, addTask, setSearchTerm } from '../redux/tasksSlice';
import './KanbanBoard.css';

const KanbanBoard = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const searchTerm = useSelector((state) => state.tasks.searchTerm);
  const dispatch = useDispatch();
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    if (!destination || (source.droppableId === destination.droppableId && source.index === destination.index)) {
      return;
    }

    dispatch(
      moveTask({
        source: source.droppableId,
        destination: destination.droppableId,
        taskId: draggableId,
        destinationIndex: destination.index,
      })
    );
  };

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const filterTasks = (taskList) => {
    return taskList.filter((task) => task.title.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  const handleAddTask = (newTask) => {
    dispatch(addTask(newTask));
    setShowAddTaskModal(false);
  };

  return (
    <>
      <input
        type="text"
        className="search-bar"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button className="add-task-button" onClick={() => setShowAddTaskModal(true)}>
        Add New Task
      </button>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="kanban-board">
          {['todo', 'inProgress', 'peerReview', 'done'].map((stage) => (
            <Droppable key={stage} droppableId={stage}>
              {(provided) => {
                if (!provided) {
                  console.error('Provided is undefined for:', stage);
                }
                return (
                  <div
                    className="task-column"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    <h2>{stage.replace(/([A-Z])/g, ' $1').trim()}</h2>
                    {filterTasks(tasks[stage] || []).map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided) => {
                          if (!provided) {
                            console.error('Provided is undefined for task:', task.id);
                          }
                          return (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <TaskCard task={task} />
                            </div>
                          );
                        }}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                );
              }}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
      {showAddTaskModal && <AddTaskModal onAddTask={handleAddTask} onClose={() => setShowAddTaskModal(false)} />}
    </>
  );
};

export default KanbanBoard;
