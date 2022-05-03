import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className='navBar'>
      <h1 className='ms-auto'> App Title </h1>
      <ul className="nav nav-tabs justify-content-center ">
        <li className="nav-item justify-content-space-evenly">
          <a
            href="#home"
            onClick={() => handlePageChange('About')}

            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#connect"
            onClick={() => handlePageChange('Connect')}

            className={currentPage === 'Connect' ? 'nav-link active' : 'nav-link'}
          >
            Connect
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#profile"

            onClick={() => handlePageChange('Profile')}
            className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'}
          >
            Profile
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about"

            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
