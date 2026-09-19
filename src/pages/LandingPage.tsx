import React, { useState } from 'react';
import Navbar from '../components/Navbar.js';
import HomePage from './HomePage';

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <HomePage setActiveTab={setActiveTab} />
    </div>
  );
}
