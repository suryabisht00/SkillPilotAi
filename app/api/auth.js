// src/app/api/auth.js
import { cookies } from 'next/headers';
import { validateWallet, generateToken } from '@/utils/walletValidation';

export async function POST(request) {
  const { walletAddress } = await request.json();

  if (!validateWallet(walletAddress)) {
    return new Response('Invalid Wallet Address', { status: 400 });
  }

  const token = generateToken(walletAddress);
  cookies().set('walletAddress', walletAddress, { httpOnly: true, secure: true });
  cookies().set('authToken', token, { httpOnly: true, secure: true });

  return new Response('Wallet Authenticated', { status: 200 });
}
