import React, { useState } from 'react';
// src/components/SearchBar/SearchBar.js
import { useNavigate } from 'react-router-dom';

import './SearchBar.css';

// src/components/SearchBar/SearchBar.js
const SearchBar = ({ placeholder, searchPath }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
  
    const handleSearch = (e) => {
      e.preventDefault();
      if (searchTerm.trim()) {
        navigate(`${searchPath}${searchTerm}`);
      }
    };
  
    // Rest of the component
    return (
        <form className="search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      );
  };
  



export default SearchBar;
