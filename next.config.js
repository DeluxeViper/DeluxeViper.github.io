/**
 * @format
 * @type {import('next').NextConfig}
 */

const withPWA = require("next-pwa");
const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  /* config options here */
};

module.exports = {
  basePath: isProduction ? "/Portfolio-Website" : "",
  assetPrefix: isProduction ? "/Portfolio-Website" : "",
};

// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//   },
// });
