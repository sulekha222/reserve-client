import React from 'react';
import { useAppStore } from '../store/useAppStore';

export const HomePage: React.FC = () => {
  const { inventory, totalDelivered, inTransit, mapLocation, setMapLocation } = useAppStore();

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold">Re:Serve Live Command Center</h1>
        <p className="mt-2 text-emerald-100">
          Real-time surplus food tracking, active logistics, and impact distribution dashboard.
        </p>
      </div>

      {/* Dynamic Impact Counters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Food Delivered</p>
              <h2 className="text-3xl font-bold text-emerald-600 mt-1">{totalDelivered} Kg</h2>
            </div>
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg text-2xl">📦</div>
          </div>
          <p className="text-xs text-gray-400 mt-3">↑ Updated live from recent distributions</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Active Shipments</p>
              <h2 className="text-3xl font-bold text-blue-600 mt-1">{inTransit} In Transit</h2>
            </div>
            <div className="p-3 bg-blue-50 text-blue-600 rounded-lg text-2xl">🚚</div>
          </div>
          <p className="text-xs text-gray-400 mt-3">Live vehicle tracking enabled</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Available Surplus Items</p>
              <h2 className="text-3xl font-bold text-amber-600 mt-1">{inventory.length} Batches</h2>
            </div>
            <div className="p-3 bg-amber-50 text-amber-600 rounded-lg text-2xl">🥗</div>
          </div>
          <p className="text-xs text-gray-400 mt-3">Stored in browser local state</p>
        </div>
      </div>

      {/* Interactive Map & Distribution Hub Selector */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4">
          <div>
            <h3 className="text-lg font-bold text-gray-800">Live Logistics & Distribution Hubs</h3>
            <p className="text-sm text-gray-500">Select active hub to center live map focus</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-gray-700">Hub Location:</span>
            <select
              value={mapLocation.address}
              onChange={(e) => {
                const val = e.target.value;
                if (val === 'Jaipur Central Hub') {
                  setMapLocation({ lat: 26.9124, lng: 75.7873, address: 'Jaipur Central Hub' });
                } else if (val === 'Delhi Distribution Hub') {
                  setMapLocation({ lat: 28.6139, lng: 77.2090, address: 'Delhi Distribution Hub' });
                } else if (val === 'Mumbai Regional Hub') {
                  setMapLocation({ lat: 19.0760, lng: 72.8777, address: 'Mumbai Regional Hub' });
                }
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 p-2.5 outline-none"
            >
              <option value="Jaipur Central Hub">Jaipur Central Hub</option>
              <option value="Delhi Distribution Hub">Delhi Distribution Hub</option>
              <option value="Mumbai Regional Hub">Mumbai Regional Hub</option>
            </select>
          </div>
        </div>

        {/* Dynamic Embedded Google Map */}
        <div className="overflow-hidden rounded-xl border border-gray-200 shadow-inner">
          <iframe
            title="Interactive Google Map"
            width="100%"
            height="420"
            src={`https://maps.google.com/maps?q=${mapLocation.lat},${mapLocation.lng}&z=13&output=embed`}
            className="w-full border-0"
            loading="lazy"
          />
        </div>
      </div>

      {/* Live Inventory List Preview */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Active Inventory Batches</h3>
        <div className="divide-y divide-gray-100">
          {inventory.map((item) => (
            <div key={item.id} className="py-3 flex justify-between items-center">
              <div>
                <p className="font-semibold text-gray-800">{item.name}</p>
                <p className="text-xs text-gray-500">Category: {item.type}</p>
              </div>
              <div className="text-right">
                <span className="inline-block bg-emerald-50 text-emerald-700 font-semibold text-sm px-3 py-1 rounded-full">
                  {item.quantity} units
                </span>
                <p className="text-xs text-red-500 mt-1">Expires in: {item.expiryHours} hrs</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;