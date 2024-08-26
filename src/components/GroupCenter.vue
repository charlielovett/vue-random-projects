<script setup lang="ts">
import { ref, computed } from "vue";
import SearchInput from "./SearchInput";
import MemberItem from "./MemberItem";

const title = ref("Group Members");
const searchValue = ref("");

const members = ref([
  "Charlie Lovett",
  "Adam Jaffe",
  "Aidan Goodrow",
  "Matt Saperstein",
  "Hunter Disco",
  "Charlie Lovett",
  "Adam Jaffe",
  "Aidan Goodrow",
  "Matt Saperstein",
  "Hunter Disco",
]);

const filteredMembers = computed(() => {
  return members.value.filter((member) =>
    member.toLowerCase().includes(searchValue.value.toLowerCase())
  );
});
</script>

<template>
  <div class="flex justify-center items-center">
    <div class="w-[400px] h-[500px] border border-gray-400 rounded-md p-4">
      <div class="flex flex-col gap-4">
        <h1 class="py-2 px-auto">
          {{ title }}
        </h1>
        <SearchInput v-model="searchValue" />
        <div class="overflow-y-auto hide-scrollbar h-[368px]">
          <transition-group name="list" tag="div">
            <MemberItem
              v-for="(member, index) in filteredMembers"
              :key="index"
              :name="member"
              :class="{ 'border-b': index !== filteredMembers.length - 1 }"
            />
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
/* Hide scrollbar for Webkit browsers (Chrome, Safari, etc.) */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for Firefox */
.hide-scrollbar {
  scrollbar-width: none; /* Firefox */
}

/* Ensure the element is still scrollable */
.hide-scrollbar {
  overflow-y: scroll; /* Add overflow-y scroll */
}
</style>