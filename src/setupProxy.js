// const { createProxyMiddleware } = require("http-proxy-middleware");

// module.exports = (app) => {
//   app.use(
//     "/apii",
//     createProxyMiddleware({
//       target: "https://animechan.xyz",
//       changeOrigin: true,
//     })
//   );
// };
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/apii",
    createProxyMiddleware({
      target: "https://animechan.xyz",
      changeOrigin: true,
    })
  );
};
