module.exports = {
    async rewrites() {
        return [
          {
            source: '/api/:path*', // Match requests to /api/...
            destination: 'http://localhost:3000/:path*', // Proxy to the backend server
          },
        ];
      },
  }