// import { NextRequest, NextResponse } from "next/server";

// export function middleware(req: NextRequest) {
//   const path = req.nextUrl.pathname;

//   if (
//     path.startsWith("/_next/") || // Next.js internal files
//     path.startsWith("/images/") || // Public images
//     path.startsWith("/favicon.ico") || // Favicon
//     path.startsWith("/robots.txt") // Robots file
//   ) {
//     return;
//   }

//   if (path === "/") return;
//   if (!path.startsWith("/question/")) {
//     return NextResponse.rewrite(new URL("/not-found", req.url));
//   }
// }

export function middleware() {
  return;
}
