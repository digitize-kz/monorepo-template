import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
// export default authMiddleware({});
export default authMiddleware({
  // beforeAuth: (req) => {
  //   // Execute next-intl middleware before Clerk's auth middleware
  //   return intlMiddleware(req);
  // },

  // Ensure that locale specific sign-in pages are public
  publicRoutes: ["/"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
