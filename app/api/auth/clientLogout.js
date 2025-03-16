import { deleteCookie } from '../../../utils/cookies';

export const handleLogout = (setAccount, router) => {
  deleteCookie('walletAddress');
  localStorage.removeItem('connectedAccount');
  setAccount(null);
  router.push('/'); // Redirect to home after logout
};