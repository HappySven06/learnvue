<script setup>
import { ref } from 'vue'
import Modal from '../components/Modal.vue';

    let modalOpen = ref(false);
</script>

<template>
    <button class="button is-primary" @click="modalOpen=true">Open modal</button>
    <Modal :open="modalOpen" @colse="modalOpen=flase">
        <p class="image is-4by3">
            <img src="https://picsum.photos/1280/960" alt="">
        </p>
    </Modal>
    
</template>