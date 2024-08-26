<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {defineEmits, defineProps} from "vue";

const props = defineProps<{ modelValue: string }>();
const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>();

const onInput = (event: Event) => {
  const value = event.target.value as HTMLInputElement;
  emit('update:modelValue', value);
}
</script>

<template>
  <div class="flex items-center border border-gray-200 rounded-full px-3 py-2">
    <font-awesome-icon icon="search" class="mr-2" />
    <input
      placeholder="Name"
      class="outline-none flex-1 placeholder:text-sm"
      @input="onInput"
    />
  </div>
</template>
