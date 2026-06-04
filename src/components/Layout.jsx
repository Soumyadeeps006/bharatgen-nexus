import React from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="main-content">
        <TopNav />
        <main className="page-content fade-in">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
