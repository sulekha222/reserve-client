import React, { useState } from 'react';

interface Hub {
  id: number;
  name: string;
  address: string;
  distance: string;
  type: string;
  capacity: string;
  bbox: string;
  lat: number;
  lon: number;
}

export default function NearbyPage() {
  const nearbyHubs: Hub[] = [
    {
      id: 1,
      name: 'City Center Community Kitchen',
      address: 'Connaught Place, Inner Circle, New Delhi',
      distance: '1.2 km',
      type: 'Donor Hub',
      capacity: 'High Availability',
      bbox: '77.2100,28.6250,77.2250,28.6350',
      lat: 28.6315,
      lon: 77.2167
    },
    {
      id: 2,
      name: 'Hope Orphanage & Shelter',
      address: 'Paharganj, Near Station, New Delhi',
      distance: '2.5 km',
      type: 'NGO Receiver',
      capacity: 'Needs 100 Meals Urgent',
      bbox: '77.2050,28.6380,77.2200,28.6480',
      lat: 28.6425,
      lon: 77.2120
    },
    {
      id: 3,
      name: 'Metro Grain Warehouse',
      address: 'Karol Bagh Industrial Area, Delhi',
      distance: '4.1 km',
      type: 'Storage Hub',
      capacity: 'Dry Ration Available',
      bbox: '77.1800,28.6450,77.1980,28.6580',
      lat: 28.6510,
      lon: 77.1900
    },
  ];

  const [selectedHub, setSelectedHub] = useState<Hub>(nearbyHubs[0]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <h1 style={{ margin: '0 0 0.5rem 0', fontSize: '1.8rem' }}>Nearby Food & NGO Hubs</h1>
        <p style={{ margin: 0, color: '#64748b' }}>Select a hub below to update live GPS location and map coordinates.</p>
      </div>

      {/* Dynamic Map Component */}
      <div style={{ background: '#fff', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <div style={{ padding: '0.75rem 1rem', background: '#f8fafc', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div>
            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1e293b' }}>
              📍 Focused Location: <span style={{ color: '#2563eb' }}>{selectedHub.name}</span>
            </span>
            <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Address: {selectedHub.address} ({selectedHub.lat}, {selectedHub.lon})</div>
          </div>
          <span style={{ fontSize: '0.8rem', background: '#dcfce7', color: '#15803d', padding: '0.25rem 0.6rem', borderRadius: '12px', fontWeight: 600 }}>
            GPS Synced Live
          </span>
        </div>

        {/* Dynamic Map Iframe updating based on selectedHub bbox */}
        <iframe
          key={selectedHub.id}
          title={selectedHub.name}
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
          src={`https://www.openstreetmap.org/export/embed.html?bbox=${selectedHub.bbox}&layer=mapnik&marker=${selectedHub.lat}%2C${selectedHub.lon}`}
        ></iframe>
      </div>

      {/* Interactive Hub Selection Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
        {nearbyHubs.map((hub) => (
          <div
            key={hub.id}
            onClick={() => setSelectedHub(hub)}
            style={{
              background: '#fff',
              padding: '1.25rem',
              borderRadius: '8px',
              border: selectedHub.id === hub.id ? '2px solid #2563eb' : '1px solid #e2e8f0',
              boxShadow: selectedHub.id === hub.id ? '0 4px 12px rgba(37,99,235,0.15)' : 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.8rem', background: '#f1f5f9', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 600 }}>{hub.type}</span>
              <span style={{ fontSize: '0.85rem', color: '#2563eb', fontWeight: 600 }}>📍 {hub.distance}</span>
            </div>
            <h3 style={{ margin: '0.3rem 0', fontSize: '1.05rem', color: '#0f172a' }}>{hub.name}</h3>
            <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.85rem', color: '#64748b' }}>🏢 {hub.address}</p>
            <div style={{ fontSize: '0.85rem', color: hub.type === 'NGO Receiver' ? '#dc2626' : '#16a34a', fontWeight: 600 }}>
              Status: {hub.capacity}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
