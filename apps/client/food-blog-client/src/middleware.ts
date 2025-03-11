import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { importSPKI, jwtVerify } from 'jose';

const PrivatePath = ['/blogs/create'];

export async function middleware(request: NextRequest) {
  const cookie = request.cookies.get('accessToken');
  const jwtPublicKey = process.env.JWT_KEY_PUBLIC || '';

  const path = request.nextUrl.pathname;
  console.log(path);
  if (PrivatePath.includes(path)) {
    if (cookie) {
      try {
        const publicKey = await importSPKI(jwtPublicKey, 'RS256');
        const result = await jwtVerify(cookie.value, publicKey, {
          algorithms: ['RS256'],
        });
        console.log('Token verified:', result);
      } catch (error) {
        return NextResponse.redirect(new URL('/sign-in', request.url));
      }
    } else {
      console.log('No access token found');
      return NextResponse.redirect(new URL('/sign-in', request.url));
    }
  }

  return NextResponse.next();
}
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
