import React, { useState } from 'react';
import { Database, Link2, AlertTriangle, CheckCircle, XCircle, HardDrive, RefreshCw, Layers } from 'lucide-react';
import './Integrations.css';

const IntegrationCard = ({ name, type, initialStatus, lastSync, icon: Icon }) => {
  const [status, setStatus] = useState(initialStatus);
  const [testing, setTesting] = useState(false);

  const testConnection = () => {
    setTesting(true);
    setTimeout(() => {
      setTesting(false);
      // Simulate randomizing status slightly, or keeping it success/connected
      setStatus(prev => {
        if (prev === 'disconnected') return 'connected';
        return prev;
      });
    }, 1200);
  };

  const getStatusBadge = () => {
    switch (status) {
      case 'connected':
        return (
          <span className="status-badge status-ok">
            <CheckCircle size={12} /> Connected
          </span>
        );
      case 'degraded':
        return (
          <span className="status-badge status-warn">
            <AlertTriangle size={12} /> Degraded
          </span>
        );
      default:
        return (
          <span className="status-badge status-err">
            <XCircle size={12} /> Disconnected
          </span>
        );
    }
  };

  return (
    <div className="integration-card glass-panel">
      <div className="card-header-row">
        <div className="integration-type-icon">
          <Icon size={24} />
        </div>
        {getStatusBadge()}
      </div>

      <div className="card-body">
        <h3 className="integration-title">{name}</h3>
        <p className="integration-subtitle-text">{type}</p>
      </div>

      <div className="card-footer-row">
        <div className="last-sync-col">
          <span className="footer-label">Last Sync</span>
          <span className="footer-val">{lastSync}</span>
        </div>
        
        <button 
          className={`btn btn-outline btn-sm ${testing ? 'loading-btn' : ''}`} 
          onClick={testConnection}
          disabled={testing}
        >
          {testing ? (
            <>
              <RefreshCw className="anim-spin" size={12} /> Testing...
            </>
          ) : (
            <>
              <Link2 size={12} /> Test Connection
            </>
          )}
        </button>
      </div>
    </div>
  );
};

const Integrations = () => {
  const integrationsData = [
    { name: "Google BigQuery", type: "Enterprise Data Warehouse", initialStatus: "connected", lastSync: "10 mins ago", icon: Database },
    { name: "AWS S3 Lake", type: "Object Cloud Storage", initialStatus: "connected", lastSync: "1 hr ago", icon: HardDrive },
    { name: "Apache Kafka", type: "Real-time Event Stream", initialStatus: "degraded", lastSync: "2 mins ago", icon: Layers },
    { name: "PostgreSQL CRM", type: "Relational Database", initialStatus: "connected", lastSync: "4 hrs ago", icon: Database },
    { name: "Snowflake Analytics", type: "Cloud Data Warehouse", initialStatus: "disconnected", lastSync: "1 day ago", icon: Database }
  ];

  return (
    <div className="integrations-page">
      <div className="page-header-row">
        <div>
          <h1 className="page-title">Data Integrations</h1>
          <p className="page-subtitle">Manage connection credentials and pipeline source registries.</p>
        </div>
        <button className="btn btn-primary">
          <Link2 size={16} /> Add Integration
        </button>
      </div>

      <div className="integrations-stats-grid">
        <div className="i-stat-card glass-panel">
          <span className="i-stat-label">Active Sources</span>
          <span className="i-stat-val">5</span>
        </div>
        <div className="i-stat-card glass-panel">
          <span className="i-stat-label">Operational</span>
          <span className="i-stat-val text-success">3</span>
        </div>
        <div className="i-stat-card glass-panel">
          <span className="i-stat-label">Degraded</span>
          <span className="i-stat-val text-warning">1</span>
        </div>
        <div className="i-stat-card glass-panel">
          <span className="i-stat-label">Offline</span>
          <span className="i-stat-val text-error">1</span>
        </div>
      </div>

      <div className="integrations-grid">
        {integrationsData.map((integration, idx) => (
          <IntegrationCard key={idx} {...integration} />
        ))}
      </div>
    </div>
  );
};

export default Integrations;
