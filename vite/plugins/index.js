import vue from '@vitejs/plugin-vue'
 
export default function setupPlugins(isBuild, env) {
    const plugins = [vue()]
    
    return plugins
}