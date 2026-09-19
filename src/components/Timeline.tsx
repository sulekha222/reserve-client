import React from 'react';
import { CheckCircle2, Clock, Truck, Award } from 'lucide-react';

interface TimelineProps {
  status: 'AVAILABLE' | 'RESERVED' | 'PICKED_UP' | 'REDISTRIBUTED' | 'EXPIRED' | 'CANCELLED' | string;
  timestamps?: {
    createdAt?: string;
    reservedAt?: string;
    pickedUpAt?: string;
    redistributedAt?: string;
  };
}

export const Timeline: React.FC<TimelineProps> = ({ status, timestamps }) => {
  const steps = [
    {
      key: 'AVAILABLE',
      title: 'Food Surplus Added',
      desc: 'Listed in inventory & open for matching',
      icon: CheckCircle2,
      time: timestamps?.createdAt,
    },
    {
      key: 'RESERVED',
      title: 'NGO Reserved',
      desc: 'Smart match confirmed & pickup QR generated',
      icon: Clock,
      time: timestamps?.reservedAt,
    },
    {
      key: 'PICKED_UP',
      title: 'Pickup Verified',
      desc: 'Verified via secure QR token & in transit',
      icon: Truck,
      time: timestamps?.pickedUpAt,
    },
    {
      key: 'REDISTRIBUTED',
      title: 'Redistribution Completed',
      desc: 'Meals served & impact metrics updated',
      icon: Award,
      time: timestamps?.redistributedAt,
    },
  ];

  const statusOrder = ['AVAILABLE', 'RESERVED', 'PICKED_UP', 'REDISTRIBUTED'];
  const currentIndex = statusOrder.indexOf(status);

  return (
    <div style={{ padding: '16px 0', width: '100%' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          position: 'relative',
          gap: 12,
        }}
      >
        {steps.map((step, idx) => {
          const isDone = currentIndex >= idx;
          const isCurrent = currentIndex === idx;
          const StepIcon = step.icon;

          return (
            <div
              key={step.key}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
              }}
            >
              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div
                  style={{
                    position: 'absolute',
                    top: 18,
                    left: '50%',
                    width: '100%',
                    height: 2,
                    background: currentIndex > idx ? '#73f5a3' : 'rgba(255, 255, 255, 0.1)',
                    zIndex: 1,
                    transition: 'all 0.3s ease',
                  }}
                />
              )}

              {/* Node Icon */}
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: isDone ? '#73f5a3' : '#0d2119',
                  color: isDone ? '#071510' : '#70847a',
                  border: `2px solid ${isDone ? '#73f5a3' : 'rgba(255, 255, 255, 0.15)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                  boxShadow: isCurrent ? '0 0 16px rgba(115, 245, 163, 0.5)' : 'none',
                  transition: 'all 0.3s ease',
                  marginBottom: 10,
                }}
              >
                <StepIcon size={18} />
              </div>

              {/* Title & Desc */}
              <div style={{ zIndex: 2 }}>
                <strong
                  style={{
                    display: 'block',
                    fontSize: 12,
                    fontWeight: 700,
                    color: isDone ? '#f5fff9' : '#70847a',
                  }}
                >
                  {step.title}
                </strong>
                <p style={{ fontSize: 10, color: '#8fa49a', margin: '4px 0 0', maxWidth: 160 }}>
                  {step.desc}
                </p>
                {step.time && (
                  <span style={{ fontSize: 9, color: '#73f5a3', display: 'block', marginTop: 3 }}>
                    {new Date(step.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
