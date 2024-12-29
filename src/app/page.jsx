'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from './components/Button';
import './globals.css';
import Header from './components/Navbar';
import { handleLogin } from './api/auth/login';
import { handleLogout } from './api/auth/clientLogout';

export default function HomePage() {
  const router = useRouter();
  const [account, setAccount] = useState(null);

  // ✅ Check Connection on Page Load
  useEffect(() => {
    const checkConnection = async () => {
      if (window.ethereum) {
        try {
          const walletAddress = document.cookie
            .split('; ')
            .find((row) => row.startsWith('walletAddress='))
            ?.split('=')[1];

          const accounts = await window.ethereum.request({
            method: 'eth_accounts',
          });

          if (walletAddress && accounts.includes(walletAddress)) {
            setAccount(walletAddress);
          } else {
            setAccount(null);
          }
        } catch (error) {
          console.error('Error checking wallet connection:', error);
          setAccount(null);
        }
      }
    };

    checkConnection();
  }, []);

  return (
    <div className="home-container">
      <Header />
      <h1>Welcome to the College Job Platform</h1>
      <p>Experience Real-World Job Challenges Virtually</p>
      <div className="options">
        {account ? (
          <>
            <p>Connected Wallet: {account}</p>
            <Button text="Go to Dashboard" onClick={() => router.push('/dashboard')} />
            <Button text="Logout" onClick={() => handleLogout(setAccount, router)} />
          </>
        ) : (
          <Button text="Login with Blockchain Wallet" onClick={() => handleLogin(setAccount, router)} />
        )}
        <Button text="Verify Candidate" onClick={() => router.push('/verify')} />
      </div>
    </div>
  );
}