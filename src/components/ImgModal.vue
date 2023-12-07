<script setup>
    import { ref } from 'vue';
    import Modal from './Modal.vue';
    defineProps(['open', 'scr', 'alt']);
</script>

<template>
    <Modal :open="open" @colse="$emit('close')">
        <p class="image is-4by3">
            <img src="https://picsum.photos/1280/960" alt="">
        </p>
    </Modal>
</template>