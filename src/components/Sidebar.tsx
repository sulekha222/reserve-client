import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.js';
import {
  LayoutDashboard,
  Package,
  HeartHandshake,
  Compass,
  MapPin,
  QrCode,
  BarChart3,
  Home,
  LogOut,
  UserCheck,
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  const { user, logout, loginWithRolePreset } = useAuth();
  const navigate = useNavigate();

  return (
    <aside
      className="sidebar"
      style={{
        width: 245,
        minHeight: '100vh',
        background: '#071510',
        color: '#ffffff',
        padding: '24px 16px',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        borderRight: '1px solid rgba(115, 245, 163, 0.08)',
        zIndex: 50,
      }}
    >
      {/* BRAND */}
      <div
        className="sidebar-logo"
        style={{
          padding: '0 8px 24px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <span
          className="logo-mark"
          style={{
            width: 32,
            height: 32,
            borderRadius: 9,
            background: '#73f5a3',
            color: '#071510',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 800,
            fontSize: 20,
          }}
        >
          ↻
        </span>
        <div>
          <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: -0.5 }}>Re:Serve</span>
          <div style={{ fontSize: 9, color: '#70847a', letterSpacing: 0.5 }}>
            SMART REDISTRIBUTION
          </div>
        </div>
      </div>

      {/* NAVIGATION LINKS */}
      <div style={{ flex: 1, overflowY: 'auto', paddingTop: 16 }}>
        <p
          style={{
            fontSize: 10,
            color: '#70847a',
            fontWeight: 800,
            letterSpacing: 1.2,
            margin: '12px 10px 6px',
          }}
        >
          MAIN
        </p>

        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? 'side-link active' : 'side-link')}
          style={({ isActive }) => ({
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '11px 14px',
            margin: '3px 0',
            borderRadius: 9,
            color: isActive ? '#071510' : '#b8c9c0',
            background: isActive ? '#73f5a3' : 'transparent',
            fontWeight: isActive ? 700 : 500,
            fontSize: 13,
            textDecoration: 'none',
            transition: 'all 0.2s ease',
          })}
        >
          <LayoutDashboard size={17} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/inventory"
          className={({ isActive }) => (isActive ? 'side-link active' : 'side-link')}
          style={({ isActive }) => ({
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '11px 14px',
            margin: '3px 0',
            borderRadius: 9,
            color: isActive ? '#071510' : '#b8c9c0',
            background: isActive ? '#73f5a3' : 'transparent',
            fontWeight: isActive ? 700 : 500,
            fontSize: 13,
            textDecoration: 'none',
            transition: 'all 0.2s ease',
          })}
        >
          <Package size={17} />
          <span>Food Inventory</span>
        </NavLink>

        <NavLink
          to="/requirements"
          className={({ isActive }) => (isActive ? 'side-link active' : 'side-link')}
          style={({ isActive }) => ({
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '11px 14px',
            margin: '3px 0',
            borderRadius: 9,
            color: isActive ? '#071510' : '#b8c9c0',
            background: isActive ? '#73f5a3' : 'transparent',
            fontWeight: isActive ? 700 : 500,
            fontSize: 13,
            textDecoration: 'none',
            transition: 'all 0.2s ease',
          })}
        >
          <HeartHandshake size={17} />
          <span>NGO Requirements</span>
        </NavLink>

        <p
          style={{
            fontSize: 10,
            color: '#70847a',
            fontWeight: 800,
            letterSpacing: 1.2,
            margin: '18px 10px 6px',
          }}
        >
          REDISTRIBUTION & ROUTE
        </p>

        <NavLink
          to="/matching"
          className={({ isActive }) => (isActive ? 'side-link active' : 'side-link')}
          style={({ isActive }) => ({
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '11px 14px',
            margin: '3px 0',
            borderRadius: 9,
            color: isActive ? '#071510' : '#b8c9c0',
            background: isActive ? '#73f5a3' : 'transparent',
            fontWeight: isActive ? 700 : 500,
            fontSize: 13,
            textDecoration: 'none',
            transition: 'all 0.2s ease',
          })}
        >
          <Compass size={17} />
          <span>Smart Matching</span>
        </NavLink>

        <NavLink
          to="/nearby"
          className={({ isActive }) => (isActive ? 'side-link active' : 'side-link')}
          style={({ isActive }) => ({
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '11px 14px',
            margin: '3px 0',
            borderRadius: 9,
            color: isActive ? '#071510' : '#b8c9c0',
            background: isActive ? '#73f5a3' : 'transparent',
            fontWeight: isActive ? 700 : 500,
            fontSize: 13,
            textDecoration: 'none',
            transition: 'all 0.2s ease',
          })}
        >
          <MapPin size={17} />
          <span>Nearby Discovery</span>
        </NavLink>

        <NavLink
          to="/tracking"
          className={({ isActive }) => (isActive ? 'side-link active' : 'side-link')}
          style={({ isActive }) => ({
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '11px 14px',
            margin: '3px 0',
            borderRadius: 9,
            color: isActive ? '#071510' : '#b8c9c0',
            background: isActive ? '#73f5a3' : 'transparent',
            fontWeight: isActive ? 700 : 500,
            fontSize: 13,
            textDecoration: 'none',
            transition: 'all 0.2s ease',
          })}
        >
          <QrCode size={17} />
          <span>Tracking & QR</span>
        </NavLink>

        <p
          style={{
            fontSize: 10,
            color: '#70847a',
            fontWeight: 800,
            letterSpacing: 1.2,
            margin: '18px 10px 6px',
          }}
        >
          ANALYTICS & OVERVIEW
        </p>

        <NavLink
          to="/impact"
          className={({ isActive }) => (isActive ? 'side-link active' : 'side-link')}
          style={({ isActive }) => ({
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '11px 14px',
            margin: '3px 0',
            borderRadius: 9,
            color: isActive ? '#071510' : '#b8c9c0',
            background: isActive ? '#73f5a3' : 'transparent',
            fontWeight: isActive ? 700 : 500,
            fontSize: 13,
            textDecoration: 'none',
            transition: 'all 0.2s ease',
          })}
        >
          <BarChart3 size={17} />
          <span>Impact Metrics</span>
        </NavLink>

        <NavLink
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '11px 14px',
            margin: '3px 0',
            borderRadius: 9,
            color: '#70847a',
            fontSize: 13,
            textDecoration: 'none',
          }}
        >
          <Home size={17} />
          <span>Public Landing</span>
        </NavLink>
      </div>

      {/* USER PROFILE & DEMO ROLE SELECTOR */}
      <div
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: 14,
          marginTop: 'auto',
        }}
      >
        <div
          style={{
            background: '#0d2119',
            border: '1px solid rgba(115, 245, 163, 0.12)',
            borderRadius: 10,
            padding: '10px 12px',
            marginBottom: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#f5fff9' }}>
              {user?.name || 'Re:Serve User'}
            </span>
            <span
              style={{
                fontSize: 9,
                fontWeight: 800,
                color: '#73f5a3',
                background: 'rgba(115, 245, 163, 0.1)',
                padding: '2px 6px',
                borderRadius: 4,
              }}
            >
              {user?.role === 'FOOD_SOURCE' ? 'KITCHEN' : user?.role}
            </span>
          </div>
          <p style={{ fontSize: 10, color: '#7c9088', margin: '4px 0 0' }}>
            {user?.email || 'Logged in'}
          </p>
        </div>

        {/* Fast Role Switcher for Demo Judges */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
          <button
            onClick={() => loginWithRolePreset('FOOD_SOURCE')}
            title="Switch demo to Kitchen role"
            style={{
              flex: 1,
              background: user?.role === 'FOOD_SOURCE' ? '#17352a' : '#0a1a14',
              color: user?.role === 'FOOD_SOURCE' ? '#73f5a3' : '#70847a',
              border: '1px solid rgba(115, 245, 163, 0.12)',
              borderRadius: 6,
              padding: '4px 0',
              fontSize: 10,
              cursor: 'pointer',
            }}
          >
            Kitchen
          </button>
          <button
            onClick={() => loginWithRolePreset('NGO')}
            title="Switch demo to NGO role"
            style={{
              flex: 1,
              background: user?.role === 'NGO' ? '#17352a' : '#0a1a14',
              color: user?.role === 'NGO' ? '#73f5a3' : '#70847a',
              border: '1px solid rgba(115, 245, 163, 0.12)',
              borderRadius: 6,
              padding: '4px 0',
              fontSize: 10,
              cursor: 'pointer',
            }}
          >
            NGO
          </button>
          <button
            onClick={() => loginWithRolePreset('ADMIN')}
            title="Switch demo to Admin role"
            style={{
              flex: 1,
              background: user?.role === 'ADMIN' ? '#17352a' : '#0a1a14',
              color: user?.role === 'ADMIN' ? '#73f5a3' : '#70847a',
              border: '1px solid rgba(115, 245, 163, 0.12)',
              borderRadius: 6,
              padding: '4px 0',
              fontSize: 10,
              cursor: 'pointer',
            }}
          >
            Admin
          </button>
        </div>

        <button
          onClick={() => {
            logout();
            navigate('/login');
          }}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            background: 'transparent',
            color: '#70847a',
            border: 'none',
            fontSize: 12,
            padding: '6px 0',
            cursor: 'pointer',
          }}
        >
          <LogOut size={13} />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
};
