var path = require("path");

module.exports = {
  baseUrl: "./",
  chainWebpack: config => {
    config
      .entry("app")
      .clear()
      .add("./renderer/src/main.js")
      .end();

    config.resolve.alias.delete("@").set("@", path.join(__dirname, "./renderer/src/"));
  }
};
