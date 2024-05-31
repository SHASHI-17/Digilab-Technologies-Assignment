import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing Next.js config can go here
};

const pwaConfig = {
  dest: 'public',
  register: true,
  skipWaiting: true,
  buildExcludes: [/middleware-manifest\.json$/],
  runtimeCaching: [
    {
      urlPattern: '/',
      handler: 'NetworkFirst',
      options: {
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ request, response, event, state }) => {
              if (response && response.type === 'opaqueredirect') {
                return new Response(response.body, {
                  status: 200,
                  statusText: 'OK',
                  headers: response.headers,
                });
              }
              return response;
            },
          },
        ],
      },
    },
    {
      urlPattern: /.+/,
      handler: 'NetworkOnly',
      options: {
        cacheName: 'dev',
        plugins: [],
      },
    },
  ],
  importScripts: ["https://cdn.pushalert.co/sw-70946.js"],
};

export default withPWA({
  ...nextConfig,
  ...pwaConfig,
});
