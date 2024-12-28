'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const walletAddress = document.cookie
      .split('; ')
      .find(row => row.startsWith('walletAddress='))
      ?.split('=')[1];

    if (!walletAddress) {
      router.push('/');
    } else {
      setAccount(walletAddress);
    }
  }, [router]);

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      {account ? <p>Connected Wallet: {account}</p> : <p>Loading...</p>}
    </div>
  );
}
