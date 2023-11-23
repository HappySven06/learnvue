<script setup>
    import { userRouter, userRoute } from 'vue-router'
    const route = useRoute()
    const router = userRouter()
    console.log(router.getRouters())
</script>

<template>
    <div class="tabs is-centered">
        <ul>
            <li v-for="link in router.getRouters()" :class="{'is-active': route-path === '/'}">
                <router-link to="/">Home</router-link>
            </li>
            <li :class="{'is-active': route-path === '/todo'}"><router-link to="/todo">ToDo</router-link></li>
        </ul>
    </div>
</template>