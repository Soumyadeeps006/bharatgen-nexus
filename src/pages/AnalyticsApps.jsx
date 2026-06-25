import React, { useState } from 'react';
import { Cpu, Play, CheckCircle, TrendingUp, AlertCircle, Zap, Shield, ShoppingCart, Activity } from 'lucide-react';
import './AnalyticsApps.css';

const AppCard = ({ name, desc, metric, initialStatus, icon: Icon }) => {
  const [running, setRunning] = useState(initialStatus === 'active');
  const [launching, setLaunching] = useState(false);

  const toggleApp = () => {
    if (running) {
      setRunning(false);
    } else {
      setLaunching(true);
      setTimeout(() => {
        setLaunching(false);
        setRunning(true);
      }, 1500);
    }
  };

  return (
    <div className="app-card glass-panel">
      <div className="app-card-header">
        <div className="app-icon-wrapper">
          <Icon size={24} className="app-icon" />
        </div>
        <span className={`app-status-indicator ${running ? 'active-dot' : 'inactive-dot'}`}>
          {running ? 'Running' : 'Offline'}
        </span>
      </div>

      <div className="app-card-body">
        <h3 className="app-title">{name}</h3>
        <p className="app-desc">{desc}</p>
      </div>

      <div className="app-card-metric">
        <span className="metric-tag">
          <Activity size={12} /> {metric}
        </span>
      </div>

      <div className="app-card-footer">
        <button 
          className={`btn btn-sm ${running ? 'btn-outline' : 'btn-primary'} ${launching ? 'loading-btn' : ''}`}
          onClick={toggleApp}
          disabled={launching}
        >
          {launching ? (
            <>
              <Zap className="anim-spin" size={14} /> Provisioning...
            </>
          ) : running ? (
            'Stop Instance'
          ) : (
            <>
              <Play size={12} /> Launch Application
            </>
          )}
        </button>
      </div>
    </div>
  );
};

const AnalyticsApps = () => {
  const appsData = [
    {
      name: "Predictive Maintenance ML",
      desc: "Anomalous sensor behavior detection and component failure horizon forecasting models.",
      metric: "98.2% Accuracy",
      initialStatus: "active",
      icon: Cpu
    },
    {
      name: "Real-time Fraud Shield",
      desc: "Transactional feature engineering pipeline matched against dynamic risk rule engines.",
      metric: "12ms Latency",
      initialStatus: "active",
      icon: Shield
    },
    {
      name: "Demand Forecasting Model",
      desc: "Time series transformer models estimating retail and supply requirements.",
      metric: "4.2% MAPE",
      initialStatus: "inactive",
      icon: TrendingUp
    },
    {
      name: "Supply Chain Router",
      desc: "Graph-based routing optimization with weather and port delay integration.",
      metric: "94.8% Opt. Rate",
      initialStatus: "active",
      icon: ShoppingCart
    }
  ];

  return (
    <div className="analytics-apps-page">
      <div className="page-header-row">
        <div>
          <h1 className="page-title">Analytics Applications</h1>
          <p className="page-subtitle">Deploy and monitor operational machine learning microservices.</p>
        </div>
      </div>

      <div className="apps-grid">
        {appsData.map((app, idx) => (
          <AppCard key={idx} {...app} />
        ))}
      </div>
    </div>
  );
};

export default AnalyticsApps;
