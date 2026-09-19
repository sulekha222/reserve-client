import React, { useState } from 'react';

export default function RequirementsPage() {
  const [requests, setRequests] = useState([
    { id: 1, ngo: 'Hope Shelter NGO', needed: '100 Prepared Meals', urgency: 'High', location: 'Central District' },
    { id: 2, ngo: 'Care Food Bank', needed: '50 kg Dry Ration / Grains', urgency: 'Medium', location: 'East Hub' },
  ]);

  const [form, setForm] = useState({ ngo: '', needed: '', urgency: 'Medium', location: '' });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.ngo || !form.needed) return;
    setRequests([...requests, { id: Date.now(), ...form }]);
    setForm({ ngo: '', needed: '', urgency: 'Medium', location: '' });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <h1 style={{ margin: '0 0 0.5rem 0', fontSize: '1.8rem' }}>NGO Food Requirements</h1>
        <p style={{ margin: 0, color: '#64748b' }}>NGOs can post their daily food requirements to match with nearby donors.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1.5rem' }}>
        <form onSubmit={handleAdd} style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Post Requirement</h3>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.25rem' }}>NGO Name</label>
            <input
              type="text"
              placeholder="e.g. Annapurna Foundation"
              value={form.ngo}
              onChange={(e) => setForm({ ...form, ngo: e.target.value })}
              style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.25rem' }}>Food Needed</label>
            <input
              type="text"
              placeholder="e.g. 80 Packed Rice Boxes"
              value={form.needed}
              onChange={(e) => setForm({ ...form, needed: e.target.value })}
              style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.25rem' }}>Urgency Level</label>
            <select
              value={form.urgency}
              onChange={(e) => setForm({ ...form, urgency: e.target.value })}
              style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }}
            >
              <option value="High">High (Immediate)</option>
              <option value="Medium">Medium (Within 12 hrs)</option>
              <option value="Low">Low (Flexible)</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.25rem' }}>Location</label>
            <input
              type="text"
              placeholder="e.g. North Zone Center"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }}
            />
          </div>
          <button type="submit" style={{ background: '#2563eb', color: '#fff', border: 'none', padding: '0.75rem', borderRadius: '6px', fontWeight: 600, cursor: 'pointer' }}>
            + Post Requirement
          </button>
        </form>

        <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.1rem' }}>Active Requirements ({requests.length})</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e2e8f0', color: '#64748b', fontSize: '0.875rem' }}>
                <th style={{ padding: '0.75rem' }}>NGO Name</th>
                <th style={{ padding: '0.75rem' }}>Requirement</th>
                <th style={{ padding: '0.75rem' }}>Urgency</th>
                <th style={{ padding: '0.75rem' }}>Location</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((r) => (
                <tr key={r.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '0.75rem', fontWeight: 500 }}>{r.ngo}</td>
                  <td style={{ padding: '0.75rem' }}>{r.needed}</td>
                  <td style={{ padding: '0.75rem', color: r.urgency === 'High' ? '#dc2626' : '#d97706', fontWeight: 600 }}>{r.urgency}</td>
                  <td style={{ padding: '0.75rem', color: '#64748b' }}>{r.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
