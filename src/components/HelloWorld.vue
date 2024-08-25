<script setup lang="ts">
import { defineComponent } from 'vue';
</script>

<template>
  <button
    class="border border-black px-2 py-1 rounded-lg"
    @click="console.log('Hello, world')"
  >
    My Button
  </button>
</template>