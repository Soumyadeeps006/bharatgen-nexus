import React, { useState } from 'react';
import { Save, Shield, Sliders, Bell, User, CheckCircle2 } from 'lucide-react';
import './Settings.css';

const Settings = () => {
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [refreshInterval, setRefreshInterval] = useState("30");
  const [projectId, setProjectId] = useState("bharatgen-prod-40291");
  const [role, setRole] = useState("Data Engineer");
  const [saving, setSaving] = useState(false);
  const [savedMessage, setSavedMessage] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaving(true);
    setSavedMessage(false);
    setTimeout(() => {
      setSaving(false);
      setSavedMessage(true);
      setTimeout(() => setSavedMessage(false), 3000);
    }, 1000);
  };

  return (
    <div className="settings-page">
      <div className="page-header-row">
        <div>
          <h1 className="page-title">System Settings</h1>
          <p className="page-subtitle">Configure system parameters, connections, and security profiles.</p>
        </div>
      </div>

      <form onSubmit={handleSave} className="settings-form">
        <div className="settings-grid">
          
          {/* General Section */}
          <div className="settings-card glass-panel">
            <div className="settings-card-header">
              <Sliders size={18} className="settings-section-icon" />
              <h3>General Configuration</h3>
            </div>
            <div className="settings-card-body">
              <div className="form-group-toggle">
                <label className="toggle-label-container">
                  <div className="toggle-text-block">
                    <span className="form-label">Auto-Refresh Metrics</span>
                    <span className="form-desc">Refresh ontology graphs and node lists automatically.</span>
                  </div>
                  <div className="switch-wrapper">
                    <input 
                      type="checkbox" 
                      checked={autoRefresh}
                      onChange={(e) => setAutoRefresh(e.target.checked)}
                    />
                    <span className="switch-slider"></span>
                  </div>
                </label>
              </div>

              <div className="form-group">
                <label className="form-label">Refresh Interval</label>
                <select 
                  className="form-control"
                  value={refreshInterval}
                  onChange={(e) => setRefreshInterval(e.target.value)}
                  disabled={!autoRefresh}
                >
                  <option value="5">Every 5 Seconds</option>
                  <option value="10">Every 10 Seconds</option>
                  <option value="30">Every 30 Seconds</option>
                  <option value="60">Every 1 Minute</option>
                </select>
              </div>
            </div>
          </div>

          {/* Security & Credentials */}
          <div className="settings-card glass-panel">
            <div className="settings-card-header">
              <Shield size={18} className="settings-section-icon" />
              <h3>Security & GCP Credentials</h3>
            </div>
            <div className="settings-card-body">
              <div className="form-group">
                <label className="form-label">GCP Project ID</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={projectId}
                  onChange={(e) => setProjectId(e.target.value)}
                  placeholder="GCP Project ID" 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Nexus Encryption Key</label>
                <input 
                  type="password" 
                  className="form-control" 
                  value="••••••••••••••••••••••••••••••••" 
                  disabled
                />
                <span className="form-desc-under">Managed by AWS KMS/Google KMS. Read-only.</span>
              </div>
            </div>
          </div>

          {/* User Profile Settings */}
          <div className="settings-card glass-panel">
            <div className="settings-card-header">
              <User size={18} className="settings-section-icon" />
              <h3>User & Role Profile</h3>
            </div>
            <div className="settings-card-body">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value="Admin User" 
                  disabled 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Access Role</label>
                <select 
                  className="form-control"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="Data Engineer">Data Engineer</option>
                  <option value="Administrator">Administrator</option>
                  <option value="Analyst">Read-Only Analyst</option>
                </select>
              </div>
            </div>
          </div>

        </div>

        <div className="settings-action-bar">
          {savedMessage && (
            <div className="saved-indicator text-success">
              <CheckCircle2 size={16} /> Configuration saved successfully!
            </div>
          )}
          <button 
            type="submit" 
            className={`btn btn-primary ${saving ? 'loading-btn' : ''}`}
            disabled={saving}
          >
            <Save size={16} /> {saving ? 'Saving...' : 'Save Configurations'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
