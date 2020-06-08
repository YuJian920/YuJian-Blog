const path = require("path");
function resolve(dir){
  return path.join(__dirname, dir);
}

const projectName = require("./package.json").name;

module.exports = {
  configureWebpack: {
    name: projectName,
    resolve: {
      alias: {
        "@": resolve("src")
      }
    }
  }
}