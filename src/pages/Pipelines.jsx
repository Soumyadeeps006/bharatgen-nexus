import React from 'react';
import { Play, Pause, RefreshCw, Trash2, Plus, CheckCircle2, XCircle, AlertCircle, Layers, Sliders } from 'lucide-react';
import './Pipelines.css';

const PipelineCard = ({ name, status, lastRun, schedule, nodes, successRate }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'running':
        return <RefreshCw className="status-icon anim-spin text-primary-glow" size={18} />;
      case 'failed':
        return <XCircle className="status-icon text-error" size={18} />;
      case 'success':
        return <CheckCircle2 className="status-icon text-success" size={18} />;
      default:
        return <AlertCircle className="status-icon text-warning" size={18} />;
    }
  };

  return (
    <div className="pipeline-row glass-panel">
      <div className="pipeline-main">
        {getStatusIcon(status)}
        <div className="pipeline-details">
          <h4 className="pipeline-title-text">{name}</h4>
          <div className="pipeline-badges">
            <span className="badge-item"><Layers size={12} /> {nodes} Nodes</span>
            <span className="badge-item"><Sliders size={12} /> {schedule}</span>
          </div>
        </div>
      </div>

      <div className="pipeline-metrics">
        <div className="metric-col">
          <span className="metric-label">Last Run</span>
          <span className="metric-val">{lastRun}</span>
        </div>
        <div className="metric-col">
          <span className="metric-label">Success Rate</span>
          <span className="metric-val">{successRate}%</span>
        </div>
      </div>

      <div className="pipeline-actions-row">
        <button className="btn btn-outline btn-sm" title="Run Pipeline">
          <Play size={14} />
        </button>
        <button className="btn btn-outline btn-sm" title="Pause Pipeline">
          <Pause size={14} />
        </button>
        <button className="btn btn-outline btn-sm btn-danger-hover" title="Delete">
          <Trash2 size={14} />
        </button>
      </div>
    </div>
  );
};

const Pipelines = () => {
  const pipelinesData = [
    { name: "Mfg_Sensor_Ingest_v2", status: "running", lastRun: "2 mins ago", schedule: "Hourly", nodes: 14, successRate: 98.4 },
    { name: "Agri_SupplyChain_ETL", status: "running", lastRun: "5 mins ago", schedule: "Daily", nodes: 8, successRate: 100 },
    { name: "Healthcare_Anonymizer", status: "failed", lastRun: "1 hr ago", schedule: "Daily", nodes: 22, successRate: 91.2 },
    { name: "Finance_Fraud_Detect", status: "success", lastRun: "3 hrs ago", schedule: "Continuous", nodes: 45, successRate: 99.9 },
    { name: "Customer_Churn_Predictor", status: "success", lastRun: "12 hrs ago", schedule: "Weekly", nodes: 12, successRate: 95.0 }
  ];

  return (
    <div className="pipelines-page">
      <div className="page-header-row">
        <div>
          <h1 className="page-title">Data Pipelines</h1>
          <p className="page-subtitle">Configure, run, and orchestrate automated data pipelines.</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={16} /> New Pipeline
        </button>
      </div>

      <div className="pipelines-stats-grid">
        <div className="p-stat-card glass-panel">
          <span className="p-stat-label">Total Pipelines</span>
          <span className="p-stat-val">5</span>
        </div>
        <div className="p-stat-card glass-panel">
          <span className="p-stat-label">Active / Running</span>
          <span className="p-stat-val text-success">2</span>
        </div>
        <div className="p-stat-card glass-panel">
          <span className="p-stat-label">Failed Runs</span>
          <span className="p-stat-val text-error">1</span>
        </div>
        <div className="p-stat-card glass-panel">
          <span className="p-stat-label">Avg Success Rate</span>
          <span className="p-stat-val text-accent">96.9%</span>
        </div>
      </div>

      <div className="pipelines-list-section">
        <div className="list-header">
          <h3>Active Registries</h3>
        </div>
        <div className="pipelines-list">
          {pipelinesData.map((p, idx) => (
            <PipelineCard key={idx} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pipelines;
