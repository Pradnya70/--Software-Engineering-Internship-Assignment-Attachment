import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../redux/tasksSlice';
import './SearchBar.css';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search tasks..."
      onChange={handleSearch}
      className="search-bar"
    />
  );
};

export default SearchBar;
