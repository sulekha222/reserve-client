import React, { useState } from 'react';

export default function MatchingPage() {
  const [matches, setMatches] = useState([
    { id: 1, donor: 'City Hotel Kitchen', food: '150 kg Rice & Curry', ngo: 'Hope Shelter NGO', distance: '3.2 km', matchScore: '98%', status: 'Pending' },
    { id: 2, donor: 'Metro Bakery', food: '45 kg Bread & Pastries', ngo: 'Care Food Bank', distance: '1.8 km', matchScore: '92%', status: 'Pending' },
    { id: 3, donor: 'Royal Event Hall', food: '80 kg Mix Meals', ngo: 'Annapurna Trust', distance: '5.5 km', matchScore: '85%', status: 'Pending' },
  ]);

  const handleConfirm = (id: number) => {
    setMatches(matches.map(m => m.id === id ? { ...m, status: 'Confirmed' } : m));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <h1 style={{ margin: '0 0 0.5rem 0', fontSize: '1.8rem' }}>Automated NGO Matching</h1>
        <p style={{ margin: 0, color: '#64748b' }}>Algorithmically matching food surplus with nearby verified NGOs based on distance and capacity.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
        {matches.map((m) => (
          <div key={m.id} style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ background: '#dcfce7', color: '#15803d', padding: '0.25rem 0.6rem', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 600 }}>
                {m.matchScore} Match Score
              </span>
              <span style={{ fontSize: '0.85rem', color: '#64748b' }}>📍 {m.distance}</span>
            </div>
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>{m.donor} ➔ {m.ngo}</h3>
            <p style={{ margin: '0 0 1rem 0', color: '#475569', fontSize: '0.95rem' }}><strong>Food Item:</strong> {m.food}</p>
            {m.status === 'Confirmed' ? (
              <div style={{ background: '#dcfce7', color: '#15803d', padding: '0.6rem', borderRadius: '6px', textAlign: 'center', fontWeight: 600 }}>
                ✓ Driver & Volunteer Assigned
              </div>
            ) : (
              <button onClick={() => handleConfirm(m.id)} style={{ width: '100%', background: '#2563eb', color: '#fff', border: 'none', padding: '0.6rem', borderRadius: '6px', fontWeight: 600, cursor: 'pointer' }}>
                Confirm & Assign Volunteer
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
