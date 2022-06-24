const { withLayer0, withServiceWorker } = require("@layer0/next/config");

const nextConfig = {
  target: "server",
};

const _preLayer0Export = nextConfig;

module.exports = (phase, config) =>
  withLayer0(
    withServiceWorker({
      layer0SourceMaps: true,
      disableLayer0DevTools: true,
      ..._preLayer0Export,
    })
  );
