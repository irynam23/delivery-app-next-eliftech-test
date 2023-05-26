const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  ...nextConfig,
  images: {
    domains: ["i.ibb.co"],
  },

  env: {
    MONGODB_URI: process.env.MONGODB_URI,
  },
};
