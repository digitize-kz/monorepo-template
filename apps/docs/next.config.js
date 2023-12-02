const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",

  reactStrictMode: true,
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: ["@taskbounty-app/ui"],
  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
});

module.exports = withNextra();
