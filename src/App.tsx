import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import InventoryPage from './pages/InventoryPage';
import RequirementsPage from './pages/RequirementsPage';
import MatchingPage from './pages/MatchingPage';
import NearbyPage from './pages/NearbyPage';
import TrackingPage from './pages/TrackingPage';
import ImpactPage from './pages/ImpactPage';
import LoginPage from './pages/LoginPage';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage setActiveTab={setActiveTab} />;
      case 'dashboard':
        return <DashboardPage />;
      case 'inventory':
        return <InventoryPage />;
      case 'requirements':
        return <RequirementsPage />;
      case 'matching':
        return <MatchingPage />;
      case 'nearby':
        return <NearbyPage />;
      case 'tracking':
        return <TrackingPage />;
      case 'impact':
        return <ImpactPage />;
      case 'login':
        return <LoginPage />;
      default:
        return <HomePage setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main style={{ padding: activeTab === 'home' ? '0' : '1.5rem' }}>
        {renderContent()}
      </main>
    </div>
  );
}
