import React, { useState } from 'react';

interface FoodItem {
  id: number;
  donor: string;
  item: string;
  quantity: string;
  category: string;
  expiryHours: number;
  status: string;
}

export default function InventoryPage() {
  const [inventory, setInventory] = useState<FoodItem[]>([
    { id: 1, donor: 'City Hotel Kitchen', item: 'Cooked Rice & Dal', quantity: '120 kg', category: 'Cooked Food', expiryHours: 4, status: 'Fresh' },
    { id: 2, donor: 'Metro Bakery', item: 'Assorted Breads & Buns', quantity: '45 kg', category: 'Bakery', expiryHours: 18, status: 'Fresh' },
    { id: 3, donor: 'Fresh Mart Supermarket', item: 'Fresh Produce Boxes', quantity: '80 kg', category: 'Groceries', expiryHours: 36, status: 'Good' },
  ]);

  const [form, setForm] = useState({
    donor: '',
    item: '',
    quantity: '',
    category: 'Cooked Food',
    expiryHours: '6'
  });

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.donor || !form.item || !form.quantity) return;

    const newItem: FoodItem = {
      id: Date.now(),
      donor: form.donor,
      item: form.item,
      quantity: form.quantity,
      category: form.category,
      expiryHours: parseInt(form.expiryHours) || 6,
      status: 'Fresh'
    };

    setInventory([newItem, ...inventory]);
    setForm({ donor: '', item: '', quantity: '', category: 'Cooked Food', expiryHours: '6' });
  };

  const handleRemove = (id: number) => {
    setInventory(inventory.filter(item => item.id !== id));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <h1 style={{ margin: '0 0 0.5rem 0', fontSize: '1.8rem' }}>Food Inventory Management</h1>
        <p style={{ margin: 0, color: '#64748b' }}>Log, monitor, and manage surplus food batches before they expire.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1.5rem' }}>
        {/* Add Item Form */}
        <form onSubmit={handleAddItem} style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Log Surplus Batch</h3>
          
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.25rem' }}>Donor/Source</label>
            <input
              type="text"
              placeholder="e.g. Royal Banquet Hall"
              value={form.donor}
              onChange={(e) => setForm({ ...form, donor: e.target.value })}
              style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.25rem' }}>Food Item Description</label>
            <input
              type="text"
              placeholder="e.g. 50 Meals Paneer Gravy & Roti"
              value={form.item}
              onChange={(e) => setForm({ ...form, item: e.target.value })}
              style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.25rem' }}>Quantity / Weight</label>
            <input
              type="text"
              placeholder="e.g. 60 kg or 100 Portions"
              value={form.quantity}
              onChange={(e) => setForm({ ...form, quantity: e.target.value })}
              style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.25rem' }}>Category</label>
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }}
            >
              <option value="Cooked Food">Cooked Food (Perishable)</option>
              <option value="Bakery">Bakery Items</option>
              <option value="Groceries">Raw Produce & Groceries</option>
              <option value="Packaged">Packaged Goods</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.25rem' }}>Shelf Life (Hours Remaining)</label>
            <input
              type="number"
              value={form.expiryHours}
              onChange={(e) => setForm({ ...form, expiryHours: e.target.value })}
              style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }}
            />
          </div>

          <button type="submit" style={{ background: '#16a34a', color: '#fff', border: 'none', padding: '0.75rem', borderRadius: '6px', fontWeight: 600, cursor: 'pointer' }}>
            + Add to Inventory
          </button>
        </form>

        {/* Inventory List Table */}
        <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.1rem' }}>Active Inventory Batches ({inventory.length})</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e2e8f0', color: '#64748b', fontSize: '0.875rem' }}>
                <th style={{ padding: '0.75rem' }}>Item & Source</th>
                <th style={{ padding: '0.75rem' }}>Qty</th>
                <th style={{ padding: '0.75rem' }}>Category</th>
                <th style={{ padding: '0.75rem' }}>Expiry Window</th>
                <th style={{ padding: '0.75rem' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((i) => (
                <tr key={i.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '0.75rem' }}>
                    <div style={{ fontWeight: 600 }}>{i.item}</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{i.donor}</div>
                  </td>
                  <td style={{ padding: '0.75rem', fontWeight: 500 }}>{i.quantity}</td>
                  <td style={{ padding: '0.75rem' }}>
                    <span style={{ fontSize: '0.8rem', background: '#f1f5f9', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{i.category}</span>
                  </td>
                  <td style={{ padding: '0.75rem' }}>
                    <span style={{ color: i.expiryHours <= 6 ? '#dc2626' : '#2563eb', fontWeight: 600 }}>
                      ⏱️ {i.expiryHours} hrs left
                    </span>
                  </td>
                  <td style={{ padding: '0.75rem' }}>
                    <button onClick={() => handleRemove(i.id)} style={{ background: '#fee2e2', color: '#991b1b', border: 'none', padding: '0.35rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer' }}>
                      Mark Claimed
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
