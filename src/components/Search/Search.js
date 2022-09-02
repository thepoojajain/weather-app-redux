import React from 'react';
import './Search.css';
import '../../styles.css';

export default function Search({ setInputValue, getLocation }) {
  return (
    <div className="searchBar box-2">
      <input
        className="searchInput"
        placeholder="Enter location"
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        autoComplete="true"
      />
      <button className="searchBtn" onClick={() => getLocation()}>
        Search
      </button>
    </div>
  );
}
