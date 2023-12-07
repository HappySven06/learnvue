<script setup>
    import { ref } from 'vue'
    import Message from '../components/Message.vue'
</script>

<template>
    <Message :open="messageOpen" @colse="messageOpen=flase">

    </Message>
</template>