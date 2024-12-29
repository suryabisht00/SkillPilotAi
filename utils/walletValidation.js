// src/utils/walletValidation.js
import jwt from 'jsonwebtoken';

export const validateWallet = (walletAddress) => {
  const regex = /^0x[a-fA-F0-9]{40}$/; // Basic Ethereum wallet regex
  return regex.test(walletAddress);
};

export const generateToken = (walletAddress) => {
  return jwt.sign({ walletAddress }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return null;
  }
};
