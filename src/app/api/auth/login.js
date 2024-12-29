export const handleLogin = async (setAccount, router) => {
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