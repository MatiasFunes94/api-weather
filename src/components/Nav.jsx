import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';


function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div>
      <Link to='/'>
        <span className="navbar-brand">
          Api Weather by Mati
        </span>
      </Link>
      </div>
      <div>
        <SearchBar
          onSearch={onSearch}
        /></div>
    </nav>  
  );
};

export default Nav;
