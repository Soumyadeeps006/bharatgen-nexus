import React, { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Pipelines from './pages/Pipelines';
import Integrations from './pages/Integrations';
import AnalyticsApps from './pages/AnalyticsApps';
import Settings from './pages/Settings';

function App() {
  const [activePage, setActivePage] = useState('ontology');

  const renderPage = () => {
    switch (activePage) {
      case 'ontology':
        return <Dashboard />;
      case 'pipelines':
        return <Pipelines />;
      case 'integrations':
        return <Integrations />;
      case 'apps':
        return <AnalyticsApps />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout activePage={activePage} setActivePage={setActivePage}>
      {renderPage()}
    </Layout>
  );
}

export default App;
