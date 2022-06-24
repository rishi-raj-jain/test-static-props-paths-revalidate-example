const { Router } = require("@layer0/core/router");
const { nextRoutes } = require("@layer0/next");

module.exports = new Router()
  .match("/service-worker.js", ({ serviceWorker }) => {
    return serviceWorker(".next/static/service-worker.js");
  })
  .match("/tire-check/:path", ({ cache, removeUpstreamResponseHeader }) => {
    removeUpstreamResponseHeader("set-cookie");
    cache({
      browser: {
        maxAgeSeconds: 0,
      },
      edge: {
        forcePrivateCaching: true,
        maxAgeSeconds: 60 * 60,
      },
    });
  })
  .use(nextRoutes);
