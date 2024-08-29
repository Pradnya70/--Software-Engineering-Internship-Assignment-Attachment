import React, { useState } from 'react';
import './AddTaskModal.css';

const AddTaskModal = ({ onAddTask, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('todo'); // State for task status

  const handleSubmit = () => {
    if (title.trim() === '' || description.trim() === '') {
      alert('Title and description are required!');
      return;
    }
    onAddTask({ title, description, status });
    setTitle(''); // Clear input fields after submission
    setDescription('');
    setStatus('todo'); // Reset status after submission
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Add New Task</h2>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="status-selection">
            <button
              className={`modal-button ${status === 'todo' ? 'active' : ''}`}
              onClick={() => setStatus('todo')}
            >
              Todo
            </button>
            
            <button
              className={`modal-button ${status === 'inProgress' ? 'active' : ''}`}
              onClick={() => setStatus('inProgress')}
            >
              In Progress
            </button>
            <button
              className={`modal-button ${status === 'peer Review' ? 'active' : ''}`}
              onClick={() => setStatus('topeer Reviewdo')}
            >
              peer Review
            </button>
            <button
              className={`modal-button ${status === 'done' ? 'active' : ''}`}
              onClick={() => setStatus('done')}
            >
              Done
            </button>
          </div>
        </div>
        <div className="modal-buttons">
          <button className="modal-button submit" onClick={handleSubmit}>
            Submit
          </button>
          <button className="modal-button close" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
