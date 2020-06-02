const path = require("path");
const { name } = require("./package.json");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  webpack: function (config, env) {
    if (env === "production") {
      config.entry = path.resolve(__dirname, "./src/index.js");

      config.output = {
        path: path.resolve(__dirname, "./build"),
        filename: "index.js",
        library: name,
        libraryTarget: "umd",
      };
      delete config.optimization.splitChunks;
      delete config.optimization.runtimeChunk;
      config.module.rules.forEach((item) => {
        if (item.oneOf && Array.isArray(item.oneOf)) {
          item.oneOf.shift();
        }
      });
      config.plugins = [
        new MiniCssExtractPlugin({
          filename: name + ".css",
        }),
      ];
    }
    return config;
  },
};
