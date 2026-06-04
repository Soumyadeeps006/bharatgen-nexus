import React from 'react';
import { Server, Cpu, Database, Activity, ArrowUpRight, ArrowDownRight, Layers } from 'lucide-react';
import './Dashboard.css';

const StatCard = ({ title, value, change, isPositive, icon: Icon }) => (
  <div className="stat-card glass-panel">
    <div className="stat-header">
      <h3 className="stat-title">{title}</h3>
      <div className="stat-icon-wrapper">
        <Icon size={20} className="stat-icon" />
      </div>
    </div>
    <div className="stat-value">{value}</div>
    <div className={`stat-change ${isPositive ? 'positive' : 'negative'}`}>
      {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
      <span>{change} from last month</span>
    </div>
  </div>
);

const PipelineItem = ({ name, status, time, nodes }) => (
  <div className="pipeline-item">
    <div className="pipeline-info">
      <div className={`status-dot ${status}`}></div>
      <div>
        <h4 className="pipeline-name">{name}</h4>
        <div className="pipeline-meta">
          <span className="pipeline-nodes"><Layers size={12}/> {nodes} nodes</span>
          <span className="pipeline-time">{time}</span>
        </div>
      </div>
    </div>
    <button className="btn btn-outline btn-sm">View</button>
  </div>
);

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1 className="page-title">Executive Ontology</h1>
          <p className="page-subtitle">Real-time overview of your enterprise data assets.</p>
        </div>
        <div className="dashboard-actions">
          <button className="btn btn-outline">Generate Report</button>
          <button className="btn btn-primary">New Pipeline</button>
        </div>
      </div>

      <div className="stats-grid">
        <StatCard title="Active Nodes" value="1,248" change="+12.5%" isPositive={true} icon={Server} />
        <StatCard title="Data Processed (TB)" value="84.2" change="+5.2%" isPositive={true} icon={Database} />
        <StatCard title="Compute Usage" value="92%" change="-2.1%" isPositive={false} icon={Cpu} />
        <StatCard title="System Health" value="99.9%" change="+0.1%" isPositive={true} icon={Activity} />
      </div>

      <div className="dashboard-content-grid">
        <div className="glass-panel widget-large">
          <div className="widget-header">
            <h3>Resource Utilization</h3>
            <select className="widget-select">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="chart-placeholder">
            {/* A simulated chart area */}
            <div className="chart-bar" style={{height: '40%'}}></div>
            <div className="chart-bar" style={{height: '60%'}}></div>
            <div className="chart-bar" style={{height: '35%'}}></div>
            <div className="chart-bar" style={{height: '80%'}}></div>
            <div className="chart-bar" style={{height: '55%'}}></div>
            <div className="chart-bar" style={{height: '90%'}}></div>
            <div className="chart-bar" style={{height: '70%'}}></div>
          </div>
        </div>

        <div className="glass-panel widget-small">
          <div className="widget-header">
            <h3>Active Pipelines</h3>
          </div>
          <div className="pipeline-list">
            <PipelineItem name="Mfg_Sensor_Ingest_v2" status="running" time="Updated 2m ago" nodes={14} />
            <PipelineItem name="Agri_SupplyChain_ETL" status="running" time="Updated 5m ago" nodes={8} />
            <PipelineItem name="Healthcare_Anonymizer" status="failed" time="Failed 1hr ago" nodes={22} />
            <PipelineItem name="Finance_Fraud_Detect" status="running" time="Updated 3hr ago" nodes={45} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
