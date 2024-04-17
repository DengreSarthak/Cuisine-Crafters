import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 

export function middleware(request) {
    const path = request.nextUrl.pathname;

    const isPublicPath = path === '/userDetails/login' || path === '/userDetails/signup' || path === '/' || path === '/community'

    const token = request.cookies.get("token")?.value || '' 

    if(isPublicPath && token){
        return NextResponse.redirect(new URL('/', request.nextUrl));
    }

    if(!isPublicPath && !token){
        return NextResponse.redirect(new URL('/userDetails/login', request.nextUrl));
    }
}


export const config = {
  matcher: [
    '/meals',
    '/community/feed',
    '/userDetails',
    '/userDetails/profile/:path*',
    '/userDetails/login',
    '/userDetails/signup',
  ]
}

