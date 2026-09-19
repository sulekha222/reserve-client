import React from 'react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const mainNavs = [
    { id: 'home', label: 'Home' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'inventory', label: 'Inventory' },
    { id: 'requirements', label: 'Requirements' },
    { id: 'matching', label: 'Matching' },
    { id: 'nearby', label: 'Nearby Hubs' },
    { id: 'tracking', label: 'Tracking' },
    { id: 'impact', label: 'Impact' },
  ];

  return (
    <nav style={{ background: '#0f172a', padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      {/* Brand Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }} onClick={() => setActiveTab('home')}>
        <span style={{ fontSize: '1.4rem' }}>🌱</span>
        <div>
          <span style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.02em', color: '#fff' }}>Re:Serve</span>
          <span style={{ display: 'block', fontSize: '0.65rem', color: '#94a3b8' }}>Feed Today • Build Tomorrow</span>
        </div>
      </div>

      {/* Main Feature Navigation */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {mainNavs.map((nav) => (
          <button
            key={nav.id}
            onClick={() => setActiveTab(nav.id)}
            style={{
              background: activeTab === nav.id ? '#2563eb' : 'transparent',
              color: activeTab === nav.id ? '#fff' : '#94a3b8',
              border: 'none',
              padding: '0.4rem 0.85rem',
              borderRadius: '6px',
              fontSize: '0.875rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {nav.label}
          </button>
        ))}
      </div>

      {/* Top Right Login */}
      <div>
        <button
          onClick={() => setActiveTab('login')}
          style={{
            background: activeTab === 'login' ? '#16a34a' : 'rgba(255,255,255,0.1)',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.2)',
            padding: '0.4rem 1rem',
            borderRadius: '20px',
            fontSize: '0.85rem',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem'
          }}
        >
          👤 Login / Register
        </button>
      </div>
    </nav>
  );
}
