import React from 'react';
import { Search, Bell, UserCircle } from 'lucide-react';
import './TopNav.css';

const TopNav = () => {
  return (
    <header className="topnav glass-panel">
      <div className="search-container">
        <Search className="search-icon" size={18} />
        <input type="text" placeholder="Search data sources, pipelines, apps..." className="search-input" />
      </div>

      <div className="topnav-actions">
        <button className="icon-btn">
          <Bell size={20} />
          <span className="badge">3</span>
        </button>
        
        <div className="user-profile">
          <UserCircle size={24} className="user-icon" />
          <div className="user-info">
            <span className="user-name">Admin User</span>
            <span className="user-role">Data Engineer</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
