import { NextResponse } from 'next/server'
import useLocalStorage from './hooks/useLocalStarage'
import { useSelector } from 'react-redux';
import { myHeaders } from './libs/utility';
 
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
//   return NextResponse.redirect(new URL('/home', request.url))
const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
};

            const response = await fetch("https://doldor.com/api/v1/role/getUserRoles/1", requestOptions)
            const res = await response.text();

            let jRes = JSON.parse(res);
            let userRole = jRes?.roles;
            console.log(userRole);
/* if (role !== "admin") {
    return NextResponse.redirect(new URL('/', request.url))
} */
return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/receipt','/receipt/:path*'],
}