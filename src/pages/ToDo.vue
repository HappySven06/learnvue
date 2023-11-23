<script setup>
import { computed, reactive, ref } from 'vue';
import ItemList from '../components/ItemList.vue';
const message = ref('');
let i = 1;
const items = reactive([
  {id:i++ ,name:'leib', isDone: true },
  {id:i++ ,name:'sai', isDone: true },
  {id:i++ ,name:'piim', isDone: true },
  {id:i++ ,name:'viin', isDone: true },
])

const doneItems = computed(() => {
  return items.filter(item => item.isDone)
});

const toDoItems = computed(() => {
  return items.filter(item => !item.isDone)
});

function add() {
  if(message.value.trim() !== "") {
    items.push({id: i++, name: message.value, isDone: false});
    message.value = '';
  }
}
</script>

<template>
  <div class="container">
    <div class="field has-addons">
      <p class="control is-expanded">
        <input @keydown.enter="add" type="text" v-model="message" class="input">
      </p>
      <p class="control">

      </p>
    </div>
    <button v-on:click="add">tapke mind lapidaga</button>
    <input type="text" v-bind:value="message" @input="message=$event.target.value">
    <input type="text" :value="message" @input="message=$event.target.value">
    <input type="text" v-model="message">
    <h1>{{ message.split('').reverse().join('') }}</h1>
    <ItemList :items="items" title="All meh.."></ItemList>
    <ItemList :items="doneItems" title="All meh.."></ItemList>
    <ItemList :items="toDoItems" title="All meh.."></ItemList>
</div>
</template>
