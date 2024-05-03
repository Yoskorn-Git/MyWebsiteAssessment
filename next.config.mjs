/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.alias.canvas = false;
        
        return config;
    },
    publicRuntimeConfig: {
        // Will be available on both server and client
        weatherkey: process.env.API_WEATHER_KEY,
      },
    images: {
        domains: ['cdn.weatherapi.com'],
      },

};

export default nextConfig;
