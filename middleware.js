import { NextResponse } from 'next/server';
 
// This function can be marked `async` if using `await` inside
export async function middleware(request) {

  const role = request.cookies.get("roles")?.value;
//   return NextResponse.redirect(new URL('/home', request.url))

// if (role !== "admin") {
//     return NextResponse.redirect(new URL('/', request.url))
// }
return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/receipt','/receipt/:path*'],
}