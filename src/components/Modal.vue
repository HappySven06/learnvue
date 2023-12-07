<script setup>
import { ref } from 'vue'
    defineProps(['open'])
</script>

<template>
    <div class="modal" :class="{'is-active': open}">
        <div class="modal-background"></div>
        <div class="modal-content">
            <slot></slot>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>
</template>