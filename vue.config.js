var path = require("path");

const srcPath = path.join(__dirname, "./renderer/src/");
const nodeModules = path.join(__dirname, "./node_modules/");

module.exports = {
  publicPath: "./",
  chainWebpack: config => {
    config
      .entry("app")
      .clear()
      .add("./renderer/src/main.js")
      .end();

    config.resolve.alias.delete("@").set("@", srcPath);

    config.target("electron-renderer");
  }
};
