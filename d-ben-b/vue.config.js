module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/d-ben-b/" : "/",
  devServer: {
    port: 5173,
    open: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  },
};
