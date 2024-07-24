// next-sitemap.js

module.exports = {
  siteUrl: "https://prasoonasati.me",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  }, // (optional) Generate robots.txt
  // Additional options can be added here
};
