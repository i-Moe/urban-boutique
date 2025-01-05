/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://stayurbanhotel.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  outDir: 'public',
  exclude: ['/admin/*', '/checkout', '/cart'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/checkout', '/cart'],
      },
    ],
  },
  transform: async (config, path) => {
    const isBlogPost = path.startsWith('/blog/');
    return {
      loc: path,
      changefreq: isBlogPost ? 'daily' : 'weekly',
      priority: isBlogPost ? 1.0 : (path === '/' ? 0.9 : 0.7),
      lastmod: new Date().toISOString(),
    };
  },
};

// Corrigido para CommonJS
module.exports = config;
