/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
    images : {
      domains : [
        'avatars.githubusercontent.com',
        'robohash.org',
        'static-cdn.jtvnw.net'
      ]
    }
  
};

export default nextConfig;
