import React from 'react';

export default function DashboardPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <h1 style={{ margin: '0 0 0.5rem 0', fontSize: '1.8rem' }}>Dashboard Overview</h1>
        <p style={{ margin: 0, color: '#64748b' }}>Real-time metrics for food donations, active requests, and matched NGOs.</p>
      </div>

      {/* Metric Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
        <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <span style={{ fontSize: '0.875rem', color: '#64748b' }}>Surplus Food Available</span>
          <h2 style={{ margin: '0.5rem 0 0 0', color: '#16a34a', fontSize: '2rem' }}>1,240 kg</h2>
        </div>
        <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <span style={{ fontSize: '0.875rem', color: '#64748b' }}>Active NGO Requests</span>
          <h2 style={{ margin: '0.5rem 0 0 0', color: '#2563eb', fontSize: '2rem' }}>18 Active</h2>
        </div>
        <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <span style={{ fontSize: '0.875rem', color: '#64748b' }}>Pending Matches</span>
          <h2 style={{ margin: '0.5rem 0 0 0', color: '#d97706', fontSize: '2rem' }}>5 Pending</h2>
        </div>
        <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <span style={{ fontSize: '0.875rem', color: '#64748b' }}>Total Meals Served</span>
          <h2 style={{ margin: '0.5rem 0 0 0', color: '#9333ea', fontSize: '2rem' }}>14,500+</h2>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
        <h3 style={{ marginTop: 0, fontSize: '1.1rem' }}>Recent Redistribution Batches</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '1rem' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e2e8f0', color: '#64748b', fontSize: '0.875rem' }}>
              <th style={{ padding: '0.75rem' }}>Donor/Source</th>
              <th style={{ padding: '0.75rem' }}>Food Quantity</th>
              <th style={{ padding: '0.75rem' }}>Matched NGO</th>
              <th style={{ padding: '0.75rem' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
              <td style={{ padding: '0.75rem', fontWeight: 500 }}>City Hotel Kitchen</td>
              <td style={{ padding: '0.75rem' }}>150 kg Rice & Curry</td>
              <td style={{ padding: '0.75rem' }}>Hope Shelter NGO</td>
              <td style={{ padding: '0.75rem', color: '#16a34a', fontWeight: 600 }}>In Transit</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
              <td style={{ padding: '0.75rem', fontWeight: 500 }}>Metro Bakery</td>
              <td style={{ padding: '0.75rem' }}>45 kg Bread & Pastries</td>
              <td style={{ padding: '0.75rem' }}>Care Food Bank</td>
              <td style={{ padding: '0.75rem', color: '#2563eb', fontWeight: 600 }}>Delivered</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
