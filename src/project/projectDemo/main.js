import { createApp } from 'vue'
import {setupPlugins} from '@/plugins'
import App from './App.vue'
import router, { setupRouter } from './router'

import VConsole from 'vconsole'
new VConsole()

// setupPlugins(app)

// app.mount('#app')

async function bootstrap() {
    const app = createApp(App)
    setupPlugins(app)
    setupRouter(app)
    await router.isReady()
    app.mount('#app')
}
bootstrap()
