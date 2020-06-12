const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

const projectName = require("./package.json").name;

module.exports = {
  // postcss-px-to-viewport配置 https://github.com/evrone/postcss-px-to-viewport/blob/HEAD/README_CN.md
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-px-to-viewport")({
            unitToConvert: "px",
            viewportWidth: 1536,
            viewportHeight: 491,
            unitPrecision: 3,
            propList: ["*"],
            viewportUnit: "vw",
            fontViewportUnit: "vw",
            selectorBlackList: [],
            minPixelValue: 1,
            // (Boolean) 媒体查询里的单位是否需要转换单位
            mediaQuery: false,
            replace: true,
            exclude: /(\/|\\)(node_modules)(\/|\\)/
          })
        ]
      }
    }
  },
  configureWebpack: {
    devtool: "source-map",
    name: projectName,
    resolve: {
      alias: {
        "@": resolve("src")
      }
    }
  }
};
