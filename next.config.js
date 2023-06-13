/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MAP_TOKEN: 'pk.eyJ1IjoicG9lLTMiLCJhIjoiY2txb2g1Y250MHlraTJucTR2aHFyeTZmdiJ9.947joOiMFGtfoMfE-gsFkQ'
      },
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
}

module.exports = nextConfig
