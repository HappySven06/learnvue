<script setup>
import { ref } from 'vue';
const message = ref('Neeger');
const items = ref(['leib', 'sai', 'piim', 'viin'])
function add() {
  this.items.push(this.message);
}
</script>

<template>
  <button v-on:click="add">tapke mind lapidaga</button>
  <input type="text" v-bind:value="message" @input="message=$event.target.value">
  <input type="text" :value="message" @input="message=$event.target.value">
  <input type="text" v-model="message">
  <h1>{{ message.split('').reverse().join('') }}</h1>
  <ul>
    <li v-for="item in items">{{ item }}</li>
  </ul>
</template>