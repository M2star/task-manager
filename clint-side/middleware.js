import { NextResponse } from "next/server"


export function middleware(req) {
    const token = req.cookies.get('token')
    // if (!token) {
    //     const url = req.nextUrl.clone();
    //     url.pathname = '/login';
    //     return NextResponse.redirect(url);
    //   }
    // return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard'],
};