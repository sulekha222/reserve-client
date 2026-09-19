import React, { useState, useEffect } from 'react';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
}

export default function HomePage({ setActiveTab }: HomePageProps) {
  // Live Animated Counters State
  const [kgSaved, setKgSaved] = useState(0);
  const [mealsServed, setMealsServed] = useState(0);

  // Live Toast Notification Array
  const notifications = [
    "⚡ Taj Hotel just posted 50 Meal Packets!",
    "📍 Hope Orphanage accepted food pickup",
    "🚚 Volunteer Rahul started delivery route #402",
    "🌱 City Kitchen saved 120 kg food today"
  ];
  const [toastIndex, setToastIndex] = useState(0);

  // Counter Animation Logic
  useEffect(() => {
    let startKg = 0;
    let startMeals = 0;
    const targetKg = 1240;
    const targetMeals = 14500;
    const duration = 1500; // 1.5 seconds
    const interval = 20;
    const steps = duration / interval;

    const kgIncrement = targetKg / steps;
    const mealsIncrement = targetMeals / steps;

    const timer = setInterval(() => {
      startKg += kgIncrement;
      startMeals += mealsIncrement;

      if (startKg >= targetKg) {
        setKgSaved(targetKg);
        setMealsServed(targetMeals);
        clearInterval(timer);
      } else {
        setKgSaved(Math.floor(startKg));
        setMealsServed(Math.floor(startMeals));
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Toast Cycle Effect
  useEffect(() => {
    const toastTimer = setInterval(() => {
      setToastIndex((prev) => (prev + 1) % notifications.length);
    }, 3500);
    return () => clearInterval(toastTimer);
  }, [notifications.length]);

  return (
    <div style={{ 
      background: 'linear-gradient(-45deg, #f8fafc, #edf7f6, #e0f2fe, #f1f5f9)',
      backgroundSize: '400% 400%',
      animation: 'gradientBG 12s ease infinite',
      minHeight: '90vh', 
      padding: '2rem 4rem', 
      display: 'flex', 
      alignItems: 'center', 
      position: 'relative',
      overflow: 'hidden' 
    }}>
      {/* CSS Keyframe Animations */}
      <style>{`
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes floatSlow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        @keyframes floatFast {
          0% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-8px) scale(1.02); }
          100% { transform: translateY(0px) scale(1); }
        }

        @keyframes pulseGlow {
          0% { box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(22, 163, 74, 0); }
          100% { box-shadow: 0 0 0 0 rgba(22, 163, 74, 0); }
        }

        @keyframes rotateGlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes slideInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .floating-card-1 { animation: floatSlow 4s ease-in-out infinite; }
        .floating-card-2 { animation: floatSlow 5s ease-in-out infinite 1s; }
        .floating-card-3 { animation: floatFast 3.5s ease-in-out infinite 0.5s; }
        .pulse-badge { animation: pulseGlow 2s infinite; }
        .toast-slide { animation: slideInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
      `}</style>

      {/* Real-time Activity Live Toast Notification */}
      <div key={toastIndex} className="toast-slide" style={{
        position: 'absolute',
        bottom: '20px',
        left: '40px',
        background: 'rgba(15, 23, 42, 0.9)',
        color: '#fff',
        padding: '0.6rem 1.2rem',
        borderRadius: '30px',
        fontSize: '0.85rem',
        fontWeight: 600,
        boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem',
        zIndex: 50,
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
        <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e' }}></span>
        {notifications[toastIndex]}
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', width: '100%' }}>
        
        {/* Left Hero Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="pulse-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#dcfce7', color: '#15803d', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, width: 'fit-content' }}>
            🌱 Smart Food Redistribution Platform
          </div>

          <h1 style={{ fontSize: '3.2rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.1, margin: 0 }}>
            Good Food.<br />
            <span style={{ color: '#2563eb' }}>Right People.</span><br />
            <span style={{ color: '#16a34a' }}>Zero Waste.</span>
          </h1>

          <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: 1.6, margin: 0 }}>
            Connecting surplus food with NGOs and communities, so nothing goes to waste and every meal reaches someone in need.
          </p>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
            <button 
              onClick={() => setActiveTab('inventory')} 
              style={{ background: '#16a34a', color: '#fff', border: 'none', padding: '0.9rem 1.8rem', borderRadius: '30px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', boxShadow: '0 4px 14px rgba(22, 163, 74, 0.35)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              🤝 Donate Food ➔
            </button>
            <button 
              onClick={() => setActiveTab('nearby')} 
              style={{ background: '#fff', color: '#1e293b', border: '1px solid #cbd5e1', padding: '0.9rem 1.8rem', borderRadius: '30px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', boxShadow: '0 2px 6px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              📍 Find Food Nearby ➔
            </button>
          </div>

          <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem', borderTop: '1px solid #cbd5e1', paddingTop: '1.5rem' }}>
            <div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#16a34a' }}>🌱 Reduce</div>
              <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Food Waste</div>
            </div>
            <div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#2563eb' }}>👥 Support</div>
              <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Communities</div>
            </div>
            <div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#059669' }}>🌍 Build</div>
              <div style={{ fontSize: '0.85rem', color: '#64748b' }}>Greener Future</div>
            </div>
          </div>
        </div>

        {/* Right Animated Visual Showcase */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          
          {/* Animated Background Spinning Aura Ring */}
          <div style={{
            position: 'absolute',
            width: '380px',
            height: '380px',
            borderRadius: '50%',
            background: 'conic-gradient(from 0deg, rgba(37,99,235,0.15), rgba(22,163,74,0.2), rgba(37,99,235,0.15))',
            animation: 'rotateGlow 15s linear infinite',
            zIndex: 1
          }}></div>

          {/* Main Glassmorphism Card */}
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.88)', 
            backdropFilter: 'blur(16px)', 
            borderRadius: '24px', 
            padding: '2.5rem', 
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)', 
            border: '1px solid rgba(255,255,255,0.8)', 
            width: '100%', 
            textAlign: 'center', 
            position: 'relative',
            zIndex: 2 
          }}>
            
            <div style={{ fontSize: '4.2rem', marginBottom: '0.5rem' }}>📦</div>
            <h3 style={{ margin: 0, fontSize: '1.5rem', color: '#0f172a' }}>Food Basket</h3>
            <p style={{ color: '#16a34a', fontWeight: 700, margin: '0.2rem 0 1.5rem 0' }}>Re:Serve Redistribution</p>
            <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 500 }}>Food Connects Us ❤️</div>

            {/* ANIMATED CARD 1: Rolling Counter for Food Saved */}
            <div className="floating-card-1" style={{ position: 'absolute', top: '-25px', left: '-15px', background: '#fff', padding: '0.8rem 1.2rem', borderRadius: '16px', boxShadow: '0 12px 30px rgba(0,0,0,0.12)', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '0.6rem', zIndex: 10 }}>
              <span style={{ fontSize: '1.6rem' }}>📦</span>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#16a34a' }}>
                  {kgSaved.toLocaleString()} kg
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Food Saved</div>
              </div>
            </div>

            {/* ANIMATED CARD 2: Rolling Counter for Meals Served */}
            <div className="floating-card-2" style={{ position: 'absolute', top: '35px', right: '-25px', background: '#fff', padding: '0.8rem 1.2rem', borderRadius: '16px', boxShadow: '0 12px 30px rgba(0,0,0,0.12)', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '0.6rem', zIndex: 10 }}>
              <span style={{ fontSize: '1.6rem' }}>🍽️</span>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#2563eb' }}>
                  {mealsServed.toLocaleString()}+
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Meals Served</div>
              </div>
            </div>

            {/* ANIMATED CARD 3: Live Fleet Badge */}
            <div className="floating-card-3" style={{ position: 'absolute', bottom: '-20px', right: '20px', background: '#fff', padding: '0.65rem 1.2rem', borderRadius: '14px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', fontWeight: 700, color: '#1e293b', zIndex: 10 }}>
              <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e' }}></span>
              🚚 Live Fleet Active
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
