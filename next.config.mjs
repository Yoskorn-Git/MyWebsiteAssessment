/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.alias.canvas = false;
        
        return config;
    },
    env: {
      API_WEATHER_KEY: process.env.API_WEATHER_KEY,
    },
    images: {
        domains: ['cdn.weatherapi.com'],
      },

};

export default nextConfig;
