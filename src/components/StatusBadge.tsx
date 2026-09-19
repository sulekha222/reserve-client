import React from 'react';

interface StatusBadgeProps {
  status: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const clean = status.toUpperCase().replace(/\s+/g, '_');

  let className = 'status-pill';
  let label = status;

  switch (clean) {
    case 'AVAILABLE':
    case 'OPEN':
      className += ' available';
      label = '● Available';
      break;
    case 'RESERVED':
    case 'PARTIALLY_MATCHED':
      className += ' reserved';
      label = '⏳ Reserved';
      break;
    case 'PICKED_UP':
    case 'MATCHED':
      className += ' picked_up';
      label = '🚚 Picked Up';
      break;
    case 'REDISTRIBUTED':
    case 'FULFILLED':
    case 'COMPLETED':
      className += ' redistributed';
      label = '✓ Redistributed';
      break;
    case 'EXPIRED':
    case 'CANCELLED':
      className += ' expired';
      label = '✕ Expired';
      break;
    case 'URGENT':
      className += ' urgent';
      label = '🔥 Urgent';
      break;
    case 'HIGH':
      className += ' high';
      label = '● High Priority';
      break;
    case 'MEDIUM':
      className += ' medium';
      label = '● Medium Priority';
      break;
    case 'LOW':
      className += ' low';
      label = '● Low Priority';
      break;
    default:
      className += ' low';
  }

  return <span className={className}>{label}</span>;
};
