import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Play, Sparkles, ChevronRight, CheckCircle2, RotateCcw } from 'lucide-react';
import { useAuth } from '../context/AuthContext.js';
import { useToast } from '../context/ToastContext.js';
import { FoodService } from '../services/foodService.js';
import { NGOService } from '../services/ngoService.js';
import { MatchService } from '../services/matchService.js';
import { PickupService } from '../services/pickupService.js';
import { redistributionService } from '../services/redistributionService.js';
import confetti from 'canvas-confetti';

export const DemoWorkflowBar: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(0);
  const navigate = useNavigate();
  const location = useLocation();
  const { loginWithRolePreset } = useAuth();
  const { showToast } = useToast();

  const runFullDemo = async () => {
    setIsRunning(true);
    showToast('Starting automated SIH End-to-End Demo...', 'info', 'Demo Mode Activated');

    try {
      // Step 1: Login as Food Source
      setActiveStep(1);
      await loginWithRolePreset('FOOD_SOURCE');
      showToast('Step 1: Logged in as Poornima Dining Hall', 'success');
      await new Promise((r) => setTimeout(r, 900));

      // Step 2: Add 100 surplus meals
      setActiveStep(2);
      navigate('/inventory');
      const now = new Date();
      const newFood = await FoodService.addFood({
        foodSourceId: 'demo-source', // will fallback or find first
        foodName: 'Special Live Batch: 100 Fresh Dal-Roti Thalis',
        category: 'Cooked Meals',
        quantity: 100,
        unit: 'meals',
        dietType: 'Veg',
        preparedAt: new Date(now.getTime() - 1800000).toISOString(),
        expiresAt: new Date(now.getTime() + 18000000).toISOString(),
        description: 'Hot nutritious evening food batch prepared for SIH demonstration.',
      });
      showToast('Step 2: Added 100 Surplus Meals to Inventory', 'success');
      await new Promise((r) => setTimeout(r, 1200));

      // Step 3 & 4: Go to matching and run match
      setActiveStep(3);
      navigate('/matching');
      showToast('Step 3 & 4: Generating Smart Match Engine Scores...', 'info');
      await new Promise((r) => setTimeout(r, 1200));

      const matches = await MatchService.generateMatches({
        foodInventoryId: newFood.data.id,
      });

      if (matches.data.length > 0) {
        const topMatch = matches.data[0];
        showToast(
          `Step 5: Smart Match found! Score: ${topMatch.matchScore}%, Distance: ${topMatch.distanceKm.toFixed(1)} km`,
          'success'
        );
        await new Promise((r) => setTimeout(r, 1200));

        // Step 6 & 7: Accept match (RESERVED)
        setActiveStep(6);
        const acceptRes = await MatchService.acceptMatch({
          foodInventoryId: topMatch.foodInventoryId,
          ngoRequirementId: topMatch.ngoRequirementId,
        });
        showToast('Step 6 & 7: Match accepted! Status → RESERVED', 'success');
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
        await new Promise((r) => setTimeout(r, 1400));

        // Step 8 & 9: Verify pickup QR
        setActiveStep(8);
        navigate('/tracking');
        showToast('Step 8: Pickup QR Generated with secure token', 'info');
        await new Promise((r) => setTimeout(r, 1200));

        const token = acceptRes.data.pickup.pickupToken;
        await PickupService.verifyPickupToken(token, {
          verifiedBy: 'SIH Volunteer Demo Agent',
          notes: 'Verified via Re:Serve Scanner',
        });
        showToast('Step 9: QR Verified! Status → PICKED_UP', 'success');
        await new Promise((r) => setTimeout(r, 1400));

        // Step 10: Complete redistribution
        setActiveStep(10);
        await redistributionService.complete({
          pickupId: acceptRes.data.pickup.id,
          quantity: 80,
          peopleServed: 80,
          notes: 'Distributed to evening shelter residents.',
        });
        showToast('Step 10: Redistribution Completed! Status → REDISTRIBUTED', 'success');
        confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
        await new Promise((r) => setTimeout(r, 1200));

        // Step 11: Open Impact Dashboard
        setActiveStep(11);
        navigate('/impact');
        showToast('Step 11: Impact Dashboard updated dynamically from DB transactions!', 'success');
      }
    } catch (err: any) {
      console.error(err);
      showToast(err.message || 'Demo step interrupted', 'error');
    } finally {
      setIsRunning(false);
      setTimeout(() => setActiveStep(0), 4000);
    }
  };

  return (
    <div
      style={{
        background: 'linear-gradient(90deg, #071510 0%, #0d271c 50%, #071510 100%)',
        borderBottom: '1px solid rgba(115, 245, 163, 0.22)',
        padding: '8px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: 12,
        color: '#f5fff9',
        position: 'sticky',
        top: 0,
        zIndex: 40,
        backdropFilter: 'blur(10px)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <span
          style={{
            background: 'rgba(115, 245, 163, 0.15)',
            border: '1px solid rgba(115, 245, 163, 0.3)',
            color: '#73f5a3',
            fontSize: 10,
            fontWeight: 800,
            padding: '2px 8px',
            borderRadius: 4,
            display: 'flex',
            alignItems: 'center',
            gap: 4,
          }}
        >
          <Sparkles size={12} />
          SIH EVALUATION DEMO BAR
        </span>
        <span style={{ color: '#8fa49a', display: 'none', gap: 6 }} className="demo-step-text">
          Flow: Surplus ➔ Matching ➔ Reservation ➔ QR Verification ➔ Redistribution ➔ Impact
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <button
          onClick={() => navigate('/inventory')}
          className="btn-outline"
          style={{ padding: '4px 10px', fontSize: 11 }}
        >
          1. Add Food
        </button>
        <button
          onClick={() => navigate('/matching')}
          className="btn-outline"
          style={{ padding: '4px 10px', fontSize: 11 }}
        >
          2. Match & Reserve
        </button>
        <button
          onClick={() => navigate('/tracking')}
          className="btn-outline"
          style={{ padding: '4px 10px', fontSize: 11 }}
        >
          3. QR Verify
        </button>
        <button
          onClick={() => navigate('/impact')}
          className="btn-outline"
          style={{ padding: '4px 10px', fontSize: 11 }}
        >
          4. Live Impact
        </button>

        <button
          onClick={runFullDemo}
          disabled={isRunning}
          className="btn-primary"
          style={{
            padding: '5px 14px',
            fontSize: 11,
            fontWeight: 800,
            boxShadow: '0 0 15px rgba(115, 245, 163, 0.35)',
          }}
        >
          <Play size={12} fill="#071510" />
          <span>{isRunning ? `Running Step ${activeStep}...` : '1-Click Full Demo Flow'}</span>
        </button>
      </div>
    </div>
  );
};
