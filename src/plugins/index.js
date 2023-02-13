import setupPinia from "./pinia";
import setupTailWindCss  from "./tailwindcss";
import setupIconPark from "./iconpark";
import setupVant from './vant'

export function setupPlugins(app) {
    setupTailWindCss()
    setupPinia(app)
    setupIconPark(app)
    setupVant(app)
}
