import React from 'react';
import SearchBar from '../components/SearchBar';

const Header = ({ handleSearch }) => {
    
  return (
    <div className="header">
      <div className="logo-container">
        <img width="48" height="48" src="https://img.icons8.com/color/48/google-keep.png" alt="google-keep"/>
        <h1 className="logo-heading">Keep Mini</h1>
      </div>
      <div className="search-bar-container">
        <SearchBar handleSearch={handleSearch} />
      </div>
      <div className="profile-icon-container">
        <img width="48" height="48" src="https://img.icons8.com/color/48/bell.png" alt="bell"/>
        <img width="48" height="48" src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/external-user-web-and-seo-tanah-basah-basic-outline-tanah-basah.png" alt="external-user-web-and-seo-tanah-basah-basic-outline-tanah-basah"/>
      </div>
    </div>
  );
};

export default Header;
