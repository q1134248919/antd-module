const {
  override,
  addWebpackAlias,
  addLessLoader,
  addBabelPlugins,
} = require('customize-cra')
const path = require('path')

module.exports = {
  devServer: configFunction => {
    return function(proxy, allowedHost) {
      /**
       * 配置代理
       */
      proxy = {
        '/api': {
          target: 'https://www.baidu.com',
          pathRewrite: { '^/api': '' },
          changeOrigin: true,
        },
      }
      const config = configFunction(proxy, allowedHost)
      return config
    }
  },
  webpack: (config, env) => {
    config = override(
      addWebpackAlias({
        ['@']: path.resolve(__dirname, 'src'),
      }),
      addLessLoader({
        modifyVars: { '@primary-color': '#72c557' },
        javascriptEnabled: true,
      }),
      ...addBabelPlugins([
        'import',
        { libraryName: 'antd', libraryDirectory: 'es', style: true },
      ])
    )(config)
    return config
  },
}