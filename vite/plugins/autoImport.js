 import Components from 'unplugin-vue-components/vite'
 
export default function autoImport(plugins) {
  plugins.push(
  
    Components({
      resolvers: [
      
        //针对iconpark图标按需导入
        (componentName) => {
          if (componentName.startsWith('Icon')) {
            return { name: componentName.slice(4), from: '@icon-park/vue-next' }
          }
        },
      ],
      extensions: ['vue'],
      dirs: ['src/components'],
      //组件名称包含目录，防止同名组件冲突
      directoryAsNamespace: true,
    }),
  )
}