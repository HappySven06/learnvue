import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue';
import ToDo from './pages/ToDo.vue';
import Modals from './pages/Modals.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/todo', component: ToDo },
]

const router = createRouter({  
    history: createWebHistory(),
    routes, 
})

const app = createApp(App);

app.use(router);

app.mount('#app')
