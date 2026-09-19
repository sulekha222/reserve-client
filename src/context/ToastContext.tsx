import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface ToastMessage {
  id: string;
  type: ToastType;
  title?: string;
  message: string;
}

interface ToastContextType {
  toasts: ToastMessage[];
  showToast: (message: string, type?: ToastType, title?: string) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (message: string, type: ToastType = 'info', title?: string) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, type, title, message }]);

    setTimeout(() => {
      removeToast(id);
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, showToast, removeToast }}>
      {children}
      {/* Render Toasts Container */}
      <div
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          maxWidth: 380,
        }}
      >
        {toasts.map((toast) => {
          let borderColor = '#73f5a3';
          let icon = '✓';
          if (toast.type === 'error') {
            borderColor = '#ff6b6b';
            icon = '✕';
          } else if (toast.type === 'warning') {
            borderColor = '#e1a02b';
            icon = '⚠';
          } else if (toast.type === 'info') {
            borderColor = '#60a5fa';
            icon = 'ℹ';
          }

          return (
            <div
              key={toast.id}
              onClick={() => removeToast(toast.id)}
              style={{
                background: '#0d2119',
                border: `1px solid ${borderColor}`,
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                borderRadius: 12,
                padding: '12px 16px',
                color: '#f5fff9',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 12,
                cursor: 'pointer',
                animation: 'slideIn 0.25s ease-out',
              }}
            >
              <span
                style={{
                  color: borderColor,
                  fontWeight: 900,
                  fontSize: 16,
                  lineHeight: '20px',
                }}
              >
                {icon}
              </span>
              <div style={{ flex: 1 }}>
                {toast.title && (
                  <strong style={{ display: 'block', fontSize: 13, marginBottom: 2, color: borderColor }}>
                    {toast.title}
                  </strong>
                )}
                <span style={{ fontSize: 12, color: '#dceee3' }}>{toast.message}</span>
              </div>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
