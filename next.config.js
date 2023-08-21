/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build', // Set the custom build directory name

  headers: async () => {
    return [
      {
        source: '/(.*)', // Apply to all routes
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY', // Prevent content from being displayed in an <iframe>
          },
        ],
      },
    ];
  },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'roar.media',
                port: '',
                pathname: '/wp-content/uploads/**',
            },
        ],
    },
}

module.exports = nextConfig
