import React from 'react';

export default function TrackingPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <h1 style={{ margin: '0 0 0.5rem 0', fontSize: '1.8rem' }}>Live Delivery Tracking</h1>
        <p style={{ margin: 0, color: '#64748b' }}>Monitor active pickup and delivery routes for food batches in real time.</p>
      </div>

      <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
        <h3 style={{ marginTop: 0 }}>Active Delivery #DEL-8092</h3>
        <p style={{ color: '#475569', margin: '0 0 1rem 0' }}>Driver: Rahul Sharma | Vehicle: KA-01-EA-4321</p>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#f8fafc', borderRadius: '8px', border: '1px dashed #cbd5e1' }}>
          <div>
            <div style={{ fontSize: '0.8rem', color: '#64748b' }}>PICKUP POINT</div>
            <div style={{ fontWeight: 600 }}>City Hotel Kitchen</div>
          </div>
          <div style={{ alignSelf: 'center', color: '#2563eb', fontWeight: 700 }}>➔ In Transit (ETA 15 mins) ➔</div>
          <div>
            <div style={{ fontSize: '0.8rem', color: '#64748b' }}>DROP-OFF NGO</div>
            <div style={{ fontWeight: 600 }}>Hope Shelter NGO</div>
          </div>
        </div>
      </div>
    </div>
  );
}
