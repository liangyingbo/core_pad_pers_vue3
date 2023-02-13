const routes = [
    {
        path:'/home',
        name:'home',
        component:() => import("../views/home.vue"),
        meta:{}
    },
    {
        path:'/demo',
        name:'demo',
        component:() => import("../views/demo.vue"),
        meta:{}
    },
    // {
    //     path:'/:any(.*)',
    //     name:'NotFound',
    //     component:() => import("../views/errors/404.vue")
    // }
]   

export default routes