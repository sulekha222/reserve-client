import React, { useState } from 'react';
import { useAppStore } from '../store/useAppStore';

export const InventoryPage: React.FC = () => {
  // Store se state aur action import karein
  const { inventory, addInventoryItem } = useAppStore();

  // Form input fields ke liye local state
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState<number | ''>('');
  const [type, setType] = useState('Perishable');
  const [expiryHours, setExpiryHours] = useState<number | ''>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !quantity || !expiryHours) {
      alert('Kripya saari fields bharein!');
      return;
    }

    // Zustand store mein new item add karein
    addInventoryItem({
      name,
      quantity: Number(quantity),
      type,
      expiryHours: Number(expiryHours),
    });

    // Form clear karein
    setName('');
    setQuantity('');
    setType('Perishable');
    setExpiryHours('');

    alert('Food Item successfully add ho gaya! Home Page aur counters auto-update ho gaye hain.');
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Food Inventory Management</h1>
        <p className="text-gray-500">Add surplus food items to trigger live distribution and impact counters.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Section */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Add Surplus Food Batch</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Item Name / Food Type</label>
              <input
                type="text"
                placeholder="e.g. Fresh Roti & Curry"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Quantity (Units/Kg)</label>
                <input
                  type="number"
                  placeholder="e.g. 25"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value === '' ? '' : Number(e.target.value))}
                  className="w-full border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Expiry (Hours)</label>
                <input
                  type="number"
                  placeholder="e.g. 6"
                  value={expiryHours}
                  onChange={(e) => setExpiryHours(e.target.value === '' ? '' : Number(e.target.value))}
                  className="w-full border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Food Category</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full border border-gray-300 p-2.5 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none bg-white"
              >
                <option value="Perishable">Cooked / Perishable</option>
                <option value="Packaged">Packaged / Shelf-Stable</option>
                <option value="Raw Produce">Raw Fruits & Vegetables</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg shadow transition"
            >
              + Add to Live Inventory
            </button>
          </form>
        </div>

        {/* Live Store Data Table */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Current Active Inventory ({inventory.length} Batches)</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b text-sm font-semibold text-gray-500 bg-gray-50">
                  <th className="p-3">Item Name</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Quantity</th>
                  <th className="p-3">Shelf Life</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {inventory.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="p-3 font-semibold text-gray-800">{item.name}</td>
                    <td className="p-3">
                      <span className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-full font-medium">
                        {item.type}
                      </span>
                    </td>
                    <td className="p-3 font-bold text-emerald-600">{item.quantity} Units</td>
                    <td className="p-3 text-red-500 text-sm">{item.expiryHours} hours left</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryPage;