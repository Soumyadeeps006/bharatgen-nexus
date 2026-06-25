import React from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import './Layout.css';

const Layout = ({ children, activePage, setActivePage }) => {
  return (
    <div className="layout-container">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="main-content">
        <TopNav />
        <main className="page-content fade-in" key={activePage}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
