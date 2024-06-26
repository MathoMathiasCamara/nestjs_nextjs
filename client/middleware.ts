import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {

  const currentUser = request.cookies.get('Authentication')?.value;

  if (!currentUser) {

    if (!request.nextUrl.pathname.startsWith('/signin') &&
      !request.nextUrl.pathname.startsWith('/signup') &&
      !request.nextUrl.pathname.startsWith('/change-password'))
      return NextResponse.redirect(new URL('/signin', request.url));
  }

}

export const config = {
  matcher: ['/((?!api|_next/static|.*\\.png$).*)'],
}