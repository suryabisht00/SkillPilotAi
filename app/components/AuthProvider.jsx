// src/components/AuthProvider.jsx
'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const validateSession = async () => {
      const walletAddress = document.cookie
        .split('; ')
        .find(row => row.startsWith('walletAddress='))
        ?.split('=')[1];

      if (walletAddress) {
        setAccount(walletAddress);
      } else {
        router.push('/');
      }
      setLoading(false);
    };

    validateSession();
  }, [router]);

  return (
    <AuthContext.Provider value={{ account, setAccount, loading }}>
      {loading ? <p>🔄 Loading...</p> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
