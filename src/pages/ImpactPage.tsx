import React from 'react';

export default function ImpactPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <h1 style={{ margin: '0 0 0.5rem 0', fontSize: '1.8rem' }}>Environmental & Social Impact</h1>
        <p style={{ margin: 0, color: '#64748b' }}>Tracking carbon emission prevention, water saving, and total beneficiaries served.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
        <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <span style={{ fontSize: '0.875rem', color: '#64748b' }}>CO2 Emissions Saved</span>
          <h2 style={{ margin: '0.5rem 0 0 0', color: '#16a34a', fontSize: '2rem' }}>3.2 Tons</h2>
        </div>
        <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <span style={{ fontSize: '0.875rem', color: '#64748b' }}>Water Footprint Saved</span>
          <h2 style={{ margin: '0.5rem 0 0 0', color: '#0284c7', fontSize: '2rem' }}>45,000 Liters</h2>
        </div>
        <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <span style={{ fontSize: '0.875rem', color: '#64748b' }}>Total Meals Distributed</span>
          <h2 style={{ margin: '0.5rem 0 0 0', color: '#9333ea', fontSize: '2rem' }}>14,500+</h2>
        </div>
        <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <span style={{ fontSize: '0.875rem', color: '#64748b' }}>Active Partner NGOs</span>
          <h2 style={{ margin: '0.5rem 0 0 0', color: '#ea580c', fontSize: '2rem' }}>24 NGOs</h2>
        </div>
      </div>
    </div>
  );
}
