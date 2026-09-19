import React, { useState } from 'react';

export default function LoginPage() {
  const [role, setRole] = useState('donor');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto', background: '#fff', padding: '2rem', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
      {isLoggedIn ? (
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#16a34a', margin: '0 0 0.5rem 0' }}>✓ Logged In Successfully!</h2>
          <p style={{ color: '#64748b' }}>Role: <strong>{role.toUpperCase()}</strong></p>
          <p style={{ color: '#64748b' }}>User: {email}</p>
          <button onClick={() => setIsLoggedIn(false)} style={{ width: '100%', marginTop: '1rem', background: '#dc2626', color: '#fff', border: 'none', padding: '0.6rem', borderRadius: '6px', fontWeight: 600, cursor: 'pointer' }}>
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h2 style={{ margin: 0, fontSize: '1.4rem' }}>Platform Login</h2>
          <p style={{ margin: 0, color: '#64748b', fontSize: '0.875rem' }}>Select your portal role to log in.</p>

          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.25rem' }}>Portal Role</label>
            <select value={role} onChange={(e) => setRole(e.target.value)} style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }}>
              <option value="donor">Food Donor (Hotel / Catering)</option>
              <option value="ngo">Verified NGO Partner</option>
              <option value="volunteer">Logistics / Volunteer</option>
              <option value="admin">Platform Admin</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.25rem' }}>Email Address</label>
            <input type="email" required placeholder="user@organization.org" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.25rem' }}>Password</label>
            <input type="password" required placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }} />
          </div>

          <button type="submit" style={{ background: '#2563eb', color: '#fff', border: 'none', padding: '0.75rem', borderRadius: '6px', fontWeight: 600, cursor: 'pointer', marginTop: '0.5rem' }}>
            Sign In
          </button>
        </form>
      )}
    </div>
  );
}
