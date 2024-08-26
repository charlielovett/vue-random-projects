<script setup lang="ts">
import { ref } from "vue";
import defineProps from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const props = defineProps(["name"]);

function getInitials(): string {
  if (!props.name) return "";

  const firstLast = props.name.split(' ')
  if (firstLast.length === 2) {
    return `${firstLast[0][0]}${firstLast[1][0]}`
  }
  return ""
}
</script>

<template>
  <div class="p-2">
    <div class="flex flex-row items-center gap-4">
      <div
        class="flex justify-center items-center w-12 h-12 rounded-full bg-gradient-to-r from-[#e4bdff] to-[#D89EFF]"
      >
        <p class="text-xl">{{ getInitials() }}</p>
      </div>
      <h3>{{ name }}</h3>
      <font-awesome-icon icon="arrow-circle-right" class="ml-auto mr-4" size="xl" />
    </div>
  </div>
</template>
