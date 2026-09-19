import React from 'react';

interface MetricCardProps {
  label: string;
  value: number | string;
  unit?: string;
  note?: string;
  variant?: 'default' | 'ai' | 'surplus' | 'highlight' | 'danger';
  icon?: React.ReactNode;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  unit,
  note,
  variant = 'default',
  icon,
}) => {
  let bg = '#0d2119';
  let border = 'rgba(115, 245, 163, 0.11)';
  let valueColor = '#f5fff9';
  let noteColor = '#73f5a3';

  if (variant === 'highlight') {
    bg = '#10291f';
    border = 'rgba(115, 245, 163, 0.28)';
    valueColor = '#73f5a3';
  } else if (variant === 'surplus') {
    bg = '#162312';
    border = 'rgba(225, 160, 43, 0.25)';
    valueColor = '#e1a02b';
    noteColor = '#e1a02b';
  } else if (variant === 'ai') {
    bg = '#0f271c';
    border = 'rgba(115, 245, 163, 0.22)';
    valueColor = '#73f5a3';
  } else if (variant === 'danger') {
    bg = '#211212';
    border = 'rgba(255, 107, 107, 0.25)';
    valueColor = '#ff6b6b';
    noteColor = '#ff6b6b';
  }

  const formattedValue =
    typeof value === 'number' ? value.toLocaleString() : value;

  return (
    <div
      style={{
        background: bg,
        border: `1px solid ${border}`,
        borderRadius: 16,
        padding: '22px 24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: 140,
        boxShadow: '0 8px 25px rgba(0,0,0,0.25)',
        transition: 'all 0.2s ease',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <span
          style={{
            fontSize: 10,
            fontWeight: 800,
            letterSpacing: 1.4,
            color: '#8fa49a',
            textTransform: 'uppercase',
          }}
        >
          {label}
        </span>
        {icon && <span style={{ color: valueColor, opacity: 0.85 }}>{icon}</span>}
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <span
          style={{
            fontSize: 32,
            fontWeight: 900,
            color: valueColor,
            letterSpacing: -1,
            lineHeight: 1,
          }}
        >
          {formattedValue}
        </span>
        {unit && (
          <span style={{ fontSize: 13, color: '#8fa49a', fontWeight: 600 }}>
            {unit}
          </span>
        )}
      </div>

      {note && (
        <div
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: noteColor,
            marginTop: 12,
            display: 'flex',
            alignItems: 'center',
            gap: 4,
          }}
        >
          <span>●</span>
          <span>{note}</span>
        </div>
      )}
    </div>
  );
};
