import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes';
 const router = createRouter({
    history: createWebHashHistory(),
    routes : [...routes]
})

export async function setupRouter(app){
    // const u = user()
    // await u.getUserInfo()
    // autoload(router)
    // guard(router)  
    app.use(router)
}

export default router;