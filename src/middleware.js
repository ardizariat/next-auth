// export { default } from "next-auth/middleware"

// export const config = { matcher: ["/user/:path*"] }

import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
    // `withAuth` augments your `Request` with the user's token.
    function middleware(req) {
        console.log({token : req.nextauth.token})
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token
        }
    }
)

export const config = { matcher: ['/user/:path*'] }
