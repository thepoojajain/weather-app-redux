import React from 'react';
import './Search.css';
import '../Common/Common.css';

export default function Search({ setInputValue, getLocation }) {
  return (
    <div class="searchBar box-2">
      <input
        class="searchInput"
        placeholder="Enter location"
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        autocomplete
      />
      <button class="searchBtn" onClick={() => getLocation()}>
        Search
      </button>
    </div>
  );
}
