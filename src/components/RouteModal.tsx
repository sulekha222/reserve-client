import React from 'react';
import { X, Navigation, Clock, MapPin, ExternalLink } from 'lucide-react';
import { RouteInfo } from '../types/index.js';

interface RouteModalProps {
  isOpen: boolean;
  onClose: () => void;
  route: RouteInfo | null;
}

export const RouteModal: React.FC<RouteModalProps> = ({ isOpen, onClose, route }) => {
  if (!isOpen || !route) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 500 }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <div>
            <span style={{ fontSize: 10, fontWeight: 800, color: '#73f5a3', letterSpacing: 1.2 }}>
              ROUTE & LOGISTICS OPTIMIZATION
            </span>
            <h3 style={{ margin: '4px 0 0', fontSize: 20, color: '#f5fff9' }}>
              Pickup Transit Route
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#8fa49a',
              cursor: 'pointer',
              padding: 4,
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
          <div
            style={{
              background: '#10291f',
              border: '1px solid rgba(115, 245, 163, 0.15)',
              borderRadius: 12,
              padding: 14,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: 'rgba(115, 245, 163, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#73f5a3',
              }}
            >
              <Navigation size={18} />
            </div>
            <div>
              <small style={{ color: '#8fa49a', fontSize: 10, display: 'block' }}>TOTAL DISTANCE</small>
              <strong style={{ fontSize: 18, color: '#73f5a3' }}>{route.distanceKm.toFixed(1)} km</strong>
            </div>
          </div>

          <div
            style={{
              background: '#10291f',
              border: '1px solid rgba(115, 245, 163, 0.15)',
              borderRadius: 12,
              padding: 14,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: 'rgba(115, 245, 163, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#73f5a3',
              }}
            >
              <Clock size={18} />
            </div>
            <div>
              <small style={{ color: '#8fa49a', fontSize: 10, display: 'block' }}>EST. TRANSIT TIME</small>
              <strong style={{ fontSize: 18, color: '#f5fff9' }}>{route.estimatedDuration}</strong>
            </div>
          </div>
        </div>

        {/* Origin and Destination Card */}
        <div
          style={{
            background: '#071510',
            border: '1px solid rgba(115, 245, 163, 0.12)',
            borderRadius: 14,
            padding: 18,
            marginBottom: 20,
          }}
        >
          {/* Origin */}
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 16 }}>
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                background: '#73f5a3',
                color: '#071510',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 12,
                fontWeight: 900,
                marginTop: 2,
              }}
            >
              A
            </div>
            <div>
              <span style={{ fontSize: 10, color: '#73f5a3', fontWeight: 800 }}>ORIGIN (FOOD SOURCE)</span>
              <strong style={{ display: 'block', fontSize: 14, color: '#f5fff9' }}>
                {route.origin.name}
              </strong>
              <p style={{ fontSize: 11, color: '#8fa49a', margin: '2px 0 0' }}>{route.origin.address}</p>
            </div>
          </div>

          <div
            style={{
              marginLeft: 11,
              height: 20,
              borderLeft: '2px dashed rgba(115, 245, 163, 0.3)',
              marginBottom: 4,
            }}
          />

          {/* Destination */}
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                background: '#60a5fa',
                color: '#071510',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 12,
                fontWeight: 900,
                marginTop: 2,
              }}
            >
              B
            </div>
            <div>
              <span style={{ fontSize: 10, color: '#60a5fa', fontWeight: 800 }}>DESTINATION (RECIPIENT NGO)</span>
              <strong style={{ display: 'block', fontSize: 14, color: '#f5fff9' }}>
                {route.destination.name}
              </strong>
              <p style={{ fontSize: 11, color: '#8fa49a', margin: '2px 0 0' }}>{route.destination.address}</p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div style={{ display: 'flex', gap: 10 }}>
          <a
            href={route.routeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ flex: 1 }}
          >
            <ExternalLink size={15} />
            <span>Open in Navigation Maps</span>
          </a>
          <button onClick={onClose} className="btn-secondary" style={{ padding: '0 20px' }}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
