<script setup>
    import { ref } from 'vue';
    import Message from '../components/message.vue';

    let isMessageVisible = ref(false);
    let isMessageVisible2 = ref(false);
</script>

<template>
    <button class="button is-primary" @click="isMessageVisible = !isMessageVisible">Message</button>
    <Message :visible="isMessageVisible" type="info" size="large" title="Message"
        message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, reiciendis amet qui soluta nihil voluptatibus nulla sequi necessitatibus aliquam animi dolore repellat praesentium, similique maxime voluptates temporibus tempora cupiditate voluptas."/>

    <button class="button is-primary" @click="isMessageVisible2 = true">Message 2</button>
    <Message :visible="isMessageVisible2" headerVisible="false" type="danger" size="medium" title="Message"
        message="You´r system has experienced an error. Please delete system32 to fix the problem"
        @close="isMessageVisible2 = false" />
</template>