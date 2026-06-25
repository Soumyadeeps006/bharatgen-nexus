import React from 'react';
import { LayoutDashboard, Network, Database, Settings, Activity, Zap } from 'lucide-react';
import './Sidebar.css';

const navItems = [
  { icon: LayoutDashboard, label: 'Ontology View', key: 'ontology' },
  { icon: Network, label: 'Data Pipelines', key: 'pipelines' },
  { icon: Database, label: 'Integrations', key: 'integrations' },
  { icon: Activity, label: 'Analytics Apps', key: 'apps' },
  { icon: Settings, label: 'Settings', key: 'settings' },
];

const Sidebar = ({ activePage, setActivePage }) => {
  return (
    <aside className="sidebar glass-panel">
      <div className="sidebar-header">
        <div className="logo-container" style={{ cursor: 'pointer' }} onClick={() => setActivePage('ontology')}>
          <Zap className="logo-icon" size={28} />
          <h2>BharatGen</h2>
        </div>
        <p className="subtitle">Enterprise OS</p>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <a 
                href="#" 
                className={`nav-link ${activePage === item.key ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActivePage(item.key);
                }}
              >
                <item.icon size={20} className="nav-icon" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <div className="status-indicator">
          <div className="pulse-dot"></div>
          <span>System Healthy</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
