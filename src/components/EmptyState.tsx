import React from 'react';

interface EmptyStateProps {
  icon?: string | React.ReactNode;
  title: string;
  description: string;
  actionText?: string;
  onAction?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon = '🍱',
  title,
  description,
  actionText,
  onAction,
}) => {
  return (
    <div
      style={{
        background: '#0d2119',
        border: '1px dashed rgba(115, 245, 163, 0.2)',
        borderRadius: 18,
        padding: '50px 30px',
        textAlign: 'center',
        margin: '20px 0',
      }}
    >
      <div style={{ fontSize: 44, marginBottom: 14 }}>{icon}</div>
      <h3 style={{ margin: '0 0 8px', fontSize: 18, color: '#f5fff9' }}>{title}</h3>
      <p style={{ margin: '0 auto 20px', fontSize: 13, color: '#8fa49a', maxWidth: 420 }}>
        {description}
      </p>
      {actionText && onAction && (
        <button onClick={onAction} className="btn-primary">
          {actionText}
        </button>
      )}
    </div>
  );
};

export const LoadingSkeleton: React.FC<{ rows?: number }> = ({ rows = 4 }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: '10px 0' }}>
      {Array.from({ length: rows }).map((_, i) => (
        <div
          key={i}
          className="skeleton"
          style={{
            height: 70,
            width: '100%',
            borderRadius: 12,
            background: 'rgba(255,255,255,0.04)',
          }}
        />
      ))}
    </div>
  );
};
