import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { X, Copy, Check } from 'lucide-react';
import { useToast } from '../context/ToastContext.js';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  pickup: {
    id: string;
    token: string;
    sourceName?: string;
    ngoName?: string;
    foodName?: string;
    quantity?: number;
    unit?: string;
  };
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({ isOpen, onClose, pickup }) => {
  const [copied, setCopied] = React.useState(false);
  const { showToast } = useToast();

  if (!isOpen) return null;

  const payloadString = JSON.stringify({
    app: 'RE:SERVE',
    action: 'VERIFY_PICKUP',
    pickupId: pickup.id,
    token: pickup.token,
    source: pickup.sourceName,
    ngo: pickup.ngoName,
    quantity: pickup.quantity,
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(pickup.token);
    setCopied(true);
    showToast('Verification token copied to clipboard!', 'info');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 440 }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
          <div>
            <span style={{ fontSize: 10, fontWeight: 800, color: '#73f5a3', letterSpacing: 1.2 }}>
              RE:SERVE SECURE PICKUP PASS
            </span>
            <h3 style={{ margin: '4px 0 0', fontSize: 18, color: '#f5fff9' }}>
              Pickup Verification QR
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

        {/* QR Code Container */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: 14,
            padding: 24,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
            marginBottom: 20,
          }}
        >
          <QRCodeSVG
            value={payloadString}
            size={210}
            level="H"
            includeMargin={true}
            fgColor="#071510"
            bgColor="#ffffff"
          />
          <div style={{ marginTop: 10, textAlign: 'center' }}>
            <span style={{ fontSize: 11, color: '#4b5563', fontWeight: 600 }}>
              Scan at Food Source for Instant Verification
            </span>
          </div>
        </div>

        {/* Details Breakdown */}
        <div
          style={{
            background: '#10291f',
            border: '1px solid rgba(115, 245, 163, 0.15)',
            borderRadius: 10,
            padding: 14,
            fontSize: 12,
            marginBottom: 16,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <span style={{ color: '#8fa49a' }}>Food Item:</span>
            <strong style={{ color: '#f5fff9' }}>{pickup.foodName || 'Prepared Surplus Food'}</strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <span style={{ color: '#8fa49a' }}>Quantity:</span>
            <strong style={{ color: '#73f5a3' }}>
              {pickup.quantity} {pickup.unit || 'meals'}
            </strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <span style={{ color: '#8fa49a' }}>Source:</span>
            <span style={{ color: '#f5fff9' }}>{pickup.sourceName || 'Central Kitchen'}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#8fa49a' }}>Recipient NGO:</span>
            <span style={{ color: '#f5fff9' }}>{pickup.ngoName || 'Community Shelter'}</span>
          </div>
        </div>

        {/* Verification Token Bar */}
        <div style={{ marginBottom: 18 }}>
          <label style={{ display: 'block', fontSize: 10, fontWeight: 700, color: '#8fa49a', marginBottom: 6 }}>
            SECURE VERIFICATION TOKEN
          </label>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: '#071510',
              border: '1px dashed rgba(115, 245, 163, 0.3)',
              borderRadius: 8,
              padding: '8px 12px',
            }}
          >
            <code style={{ flex: 1, color: '#73f5a3', fontSize: 13, fontWeight: 800 }}>
              {pickup.token}
            </code>
            <button
              onClick={handleCopy}
              className="btn-outline"
              style={{ padding: '4px 8px', fontSize: 11, display: 'flex', alignItems: 'center', gap: 4 }}
            >
              {copied ? <Check size={12} color="#73f5a3" /> : <Copy size={12} />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

        <button onClick={onClose} className="btn-primary" style={{ width: '100%' }}>
          Done
        </button>
      </div>
    </div>
  );
};
