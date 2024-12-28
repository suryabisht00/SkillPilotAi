'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from './components/Button';
import './globals.css';
import Header from './components/Navbar';

export default function HomePage() {
  const router = useRouter();
  const [account, setAccount] = useState(null);

  // ✅ Handle Login with Wallet and Set Cookie
  const handleLogin = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setAccount(accounts[0]);

        // Set the wallet address in cookies
        document.cookie = `walletAddress=${accounts[0]}; path=/;`;

        router.push('/dashboard'); // Redirect after login
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      alert('MetaMask not detected. Please install MetaMask to use this dApp.');
    }
  };

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

  // ✅ Handle Logout
  const handleLogout = () => {
    document.cookie = 'walletAddress=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    localStorage.removeItem('connectedAccount');
    setAccount(null);
    router.push('/'); // Redirect to home after logout
  };

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
            <Button text="Logout" onClick={handleLogout} />
          </>
        ) : (
          <Button text="Login with Blockchain Wallet" onClick={handleLogin} />
        )}
        <Button text="Verify Candidate" onClick={() => router.push('/verify')} />
      </div>
    </div>
  );
}
