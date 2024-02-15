import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; 

const Filter = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="dropdown">
      <button className="btn text-white" type="button" aria-expanded={dropdownOpen ? 'true' : 'false'} onClick={toggleDropdown}> <FontAwesomeIcon icon={faFilter} />
      </button>
      {dropdownOpen && (
        <ul className="dropdown-menu dropdown-menu-end show" style={{  right: '-12px', marginTop: '13px', backgroundColor: '#241744' }}>
          <li><Link to={`/films`} className="dropdown-item text-white">Films</Link></li>
          <li><Link to={`/favorites`} className="dropdown-item text-white">Favorites</Link></li>
          <li><Link to={`/watchlist`} className="dropdown-item text-white">Watchlist</Link></li>
        </ul>
      )}
    </div>
  );
};

export default Filter;