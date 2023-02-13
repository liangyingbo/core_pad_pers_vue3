import { loadEnv } from 'vite'
import alias from './vite/alias'
import { multiPages, multiBuild, filterProjects } from './vite/multipage'
import { parseEnv } from './vite/utils'
import setupPlugins from './vite/plugins'
import { visualizer } from "rollup-plugin-visualizer";
import legacy from '@vitejs/plugin-legacy'

export default ({ command, mode }) => {
  const isBuild = command === 'build';
  const root = process.cwd()
  const env = parseEnv(loadEnv(mode, root))
  console.log(command)
  console.log(env)
  return {
    //把root指向/src/Project/，编译时在此目录下编译, build时生成在dist内生成对应的文件
    root: `./src/Project/${filterProjects[0]['chunk']}`,
    plugins: [...setupPlugins(isBuild, env),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }), visualizer()],
    resolve: {
      alias,
    },
    build: {
      rollupOptions: {
        //配置多页应用程序入口文件
        input: multiPages(filterProjects),
        //打包到目标目录
        output: multiBuild(filterProjects)
      }
    },
  }
}