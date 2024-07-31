module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    if (dev) {
      config.optimization.minimize = false;
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'product.fivefingerdiscountcleaningservice.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  output: "standalone",
};
