'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCookie } from '../../utils/cookies';
import { handleLogout } from '../api/auth/clientLogout';

export default function Dashboard() {
  const router = useRouter();
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(true); // Tracks authentication state

  useEffect(() => {
    const checkWalletConnection = async () => {
      try {
        // Check wallet address from cookies
        const walletAddress = getCookie('walletAddress');

        if (!walletAddress) {
          router.push('/'); // Redirect if not authenticated
        } else {
          setAccount(walletAddress);
        }
      } catch (error) {
        console.error('Authentication Error:', error);
        router.push('/');
      } finally {
        setLoading(false); // Stop loading after check
      }
    };

    checkWalletConnection();
  }, [router]);

  if (loading) {
    return null; // Render nothing while loading
  }

  if (!account) {
    return null; // Safety fallback
  }

  return (
    <div>
      <h1>🎉 Welcome to the Dashboard</h1>
      <p>🔗 Connected Wallet: {account}</p>
      <button onClick={() => handleLogout(setAccount, router)}>Logout</button>
    </div>
  );
}