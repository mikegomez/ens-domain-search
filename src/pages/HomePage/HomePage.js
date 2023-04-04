import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>ENS Domain Search</h1>
      <SearchBar placeholder="Search for a domain" searchRoute="/search" />
      <SearchBar placeholder="Find expiring domains" searchRoute="/expiring-domains" />
    </div>
  );
};

export default HomePage;
