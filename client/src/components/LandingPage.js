import React, { useState } from 'react';
 

import Header from './Header';
import Profile from './pages/Profile'; 
import About from './pages/About';
import Home from './pages/Home';
import Connect from './pages/Connect';
import Login from './pages/Login';
import Signup from './pages/Signup';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Profile') {
      return <Profile />;
    }
    if( currentPage === 'Connect') {
      return <Connect />;
    }
    if( currentPage === 'Login') {
      return <Login />;
    }
    if(currentPage === 'Signup') {
      return <Signup />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <nav> 
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      </nav>
    <div>
      {renderPage()}
    </div>
    </div>
  );
}
//