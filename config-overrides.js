const { override, fixBabelImports, addDecoratorsLegacy } = require("customize-cra")

// override生产webpack的配置对象
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }),
  addDecoratorsLegacy() // 配置装饰器
)
