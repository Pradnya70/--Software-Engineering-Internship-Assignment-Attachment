// tasksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: {
    todo: [],
    inProgress: [],
    peerReview: [],
    done: [],
  },
  searchTerm: '',
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now().toString(), // Unique ID
        title: action.payload.title, // Task title passed from modal
        stage: 'todo', // Default stage, update this if needed
      };
      state.tasks.todo.push(newTask); // Ensure it pushes to 'todo'
    },
    moveTask: (state, action) => {
      // Logic for moving tasks between columns
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { addTask, moveTask, setSearchTerm } = tasksSlice.actions;
export default tasksSlice.reducer;
