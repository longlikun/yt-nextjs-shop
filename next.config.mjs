/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',          // 源路径
            destination: '/products', // 目标路径
            permanent: true,      // 是否是永久重定向 (HTTP 301)
          },
        ]
      },
};

export default nextConfig;
