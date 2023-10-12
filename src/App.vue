<script setup>
import { ref } from 'vue';
const message = ref('Neeger');
</script>

<template>
  <button v-on:click="message='ok'">tapke mind lapidaga</button>
  <input type="text" v-bind:value="message" @input="message=$event.target.value">
  <input type="text" :value="message" @input="message=$event.target.value">
  <input type="text" v-model="message">
  <h1>{{ message.split('').reverse().join('') }}</h1>
</template>