// src/app/middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const walletAddress = request.cookies.get('walletAddress');
  if (request.nextUrl.pathname.startsWith('/dashboard') && !walletAddress) {
    return NextResponse.redirect(new URL('/', request.url));
  }
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
