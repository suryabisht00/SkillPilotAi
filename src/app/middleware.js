import { NextResponse } from 'next/server';

export function middleware(request) {
  const walletAddress = request.cookies.get('walletAddress'); // Get walletAddress from cookies

  // Redirect to home page if user is not authenticated (walletAddress cookie missing)
  if (request.nextUrl.pathname.startsWith('/dashboard') && !walletAddress) {
    return NextResponse.redirect(new URL('/', request.url)); // Redirect to the home page if no wallet is connected
  }

  return NextResponse.next(); // Proceed if the user is logged in
}

// Protect all routes under /dashboard
export const config = {
  matcher: ['/dashboard/:path*'], // Ensure it matches all dashboard subroutes
};
