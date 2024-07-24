const baseURL = "https://prasoonasati.me";

const allPages = [
  {
    url: `${baseURL}/`,
    lastMod: new Date().toISOString(),
  },
];

export async function getServerSideProps({ res }: any) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPages
        .map((ele: any) => {
          return `
        <url>
            <loc>${ele.url}</loc>
            <lastmod>${ele.lastMod}</lastmod>
            <changefreq>daily</changefreq>
            <priority>1.0</priority>
        </url>
      `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

const SiteMap = () => {};

export default SiteMap;
