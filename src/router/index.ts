import {createRouter, createWebHashHistory, RouterOptions, Router, RouteRecordRaw} from 'vue-router'

/** you must specify the type of routes */
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('@/views/home/index.vue')
    },
    {
        path: '/login',
        component: () => import('@/views/login/index.vue')
    },
    {
        path: '/user',
        component: () => import('@/views/user/index.vue')
    },
    {
        path: '/menu',
        component: () => import('@/views/menu/index.vue')
    },
    {
        path: '/permission',
        component: () => import('@/views/permission/index.vue')
    },
    {
        path: '/role',
        component: () => import('@/views/role/index.vue')
    },
    {
        path: '/dashboard',
        component: () => import('@/views/dashboard/index.vue')
    }
]

const router: Router = createRouter({history: createWebHashHistory(), routes: routes})

export default router
