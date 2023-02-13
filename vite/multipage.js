import path from 'path'

// 引入多页面配置文件
const project = require('../scripts/multiPages.json')

// 获取是否是生产环境
// const isProduction = process.env.NODE_ENV === 'production'

// 多页面配置开始-------------------------------------- 获取pnpm run dev后缀来运行对应的项目
const npm_config_project = process.env.npm_config_project
console.log(process.env.npm_config_project)
let filterProjects = []
if (npm_config_project) {
  // 这一步操作主要是处理要单独打包和单独运行的配置项
  filterProjects = project.filter((ele) => {
    // 过滤出用户输入的单独打包的配置项
    return ele.chunk.toLowerCase() === npm_config_project.toLowerCase()
  })
  console.log(`--------单独构建：${filterProjects[0]['chunkName']}--------`)
} else {
  filterProjects = project
}

/** 多页面配置 */
const multiPages = (p) => {
  const pages = {}
  p.forEach((ele) => {
    const htmlUrl = path.resolve(
      __dirname,
      `../src/Project/${ele.chunk}/index.html`
    )
    pages[ele.chunk] = htmlUrl
  })
  return pages
}
/**多页面打包 */
const multiBuild = (p) => {
  const buildOutputConfigs = []
  p.forEach((ele) => {
    // 配置多出口打包
    buildOutputConfigs.push({
      dir: `dist/${ele.chunk}/`,
      assetFileNames: '[ext]/[name]-[hash].[ext]',
      chunkFileNames: 'js/[name]-[hash].js',
      entryFileNames: 'js/[name]-[hash].js'
    })
  })
  return buildOutputConfigs
}

export {multiPages,multiBuild,filterProjects}