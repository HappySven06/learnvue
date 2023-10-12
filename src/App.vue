<script setup>
import { ref } from 'vue';
const message = ref('Neeger');
</script>

<template>
  <button v-on:click="message='ok'">tapke mind lapidaga</button>
  <input type="text" v-bind:value="message" @input="message=$event.target.value">
  <h1>{{ message }}</h1>
</template>