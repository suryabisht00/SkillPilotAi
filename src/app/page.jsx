'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Button from './components/Button';
import './globals.css';

export default function HomePage() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/dashboard');
  };

  const handleVerify = () => {
    router.push('/verify');
  };

  return (
    <div className="home-container">
      <h1>Welcome to the College Job Platform</h1>
      <p>Experience Real-World Job Challenges Virtually</p>
      <div className="options">
        <Button text="Login with Blockchain Wallet" onClick={handleLogin} />
        <Button text="Verify Candidate" onClick={handleVerify} />
      </div>
    </div>
  );
}
