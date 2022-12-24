import MainPage from '@/pages/MainPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'
import WeatherPage from '@/pages/WeatherPage.vue'

import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            component: MainPage
        },

        {
            path: '/not-found',
            component: NotFoundPage
        },

        {
            path: '/:city',
            component: WeatherPage
        },

        {
            path: '/:pathMatch(.*)*',
            redirect: '/not-found'
        }
    ]
})