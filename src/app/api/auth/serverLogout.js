import { cookies } from 'next/headers';

export async function POST() {
  cookies().delete('walletAddress');
  cookies().delete('authToken');
  return new Response('Logged Out', { status: 200 });
}