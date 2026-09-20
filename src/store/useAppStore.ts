import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  type: string;
  expiryHours: number;
}

interface AppState {
  // Global State Variables
  inventory: InventoryItem[];
  totalDelivered: number;
  inTransit: number;
  mapLocation: {
    lat: number;
    lng: number;
    address: string;
  };

  // State Updates (Actions)
  addInventoryItem: (item: Omit<InventoryItem, 'id'>) => void;
  setMapLocation: (location: { lat: number; lng: number; address: string }) => void;
  updateTransitCount: (count: number) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // Default initial state
      inventory: [
        { id: '1', name: 'Cooked Rice & Meals', quantity: 50, type: 'Perishable', expiryHours: 4 },
        { id: '2', name: 'Packed Bread & Biscuits', quantity: 30, type: 'Packaged', expiryHours: 24 },
      ],
      totalDelivered: 1250,
      inTransit: 12,
      mapLocation: {
        lat: 26.9124,
        lng: 75.7873,
        address: 'Jaipur Central Hub',
      },

      // Adding new inventory auto-updates transit & delivered totals
      addInventoryItem: (newItem) =>
        set((state) => ({
          inventory: [...state.inventory, { ...newItem, id: Date.now().toString() }],
          inTransit: state.inTransit + 1,
          totalDelivered: state.totalDelivered + Number(newItem.quantity),
        })),

      setMapLocation: (location) => set({ mapLocation: location }),
      updateTransitCount: (count) => set({ inTransit: count }),
    }),
    {
      name: 'reserve-app-storage', // Persists state automatically in browser localStorage
    }
  )
);