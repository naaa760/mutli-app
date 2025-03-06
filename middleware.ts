import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/landing(.*)",
]);

export default clerkMiddleware((auth, req) => {
  const { userId } = auth();
  const url = new URL(req.url);

  // If user is not logged in and trying to access protected routes
  if (!userId && url.pathname === "/") {
    const landingUrl = new URL("/landing", req.url);
    return NextResponse.redirect(landingUrl);
  }

  // If user is logged in and trying to access landing page
  if (userId && url.pathname.startsWith("/landing")) {
    const homeUrl = new URL("/", req.url);
    return NextResponse.redirect(homeUrl);
  }

  if (!isPublicRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
