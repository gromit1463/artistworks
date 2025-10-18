<script setup>
import { ref } from "vue";
const { items } = defineProps({
  items: {
    type: Array,
    default: [],
  },
});

const selected = ref(items[0]);
</script>

<template>
  <div class="dropdown">
    <button class="dropdown-selection">
      <img
        v-if="selected.thumb"
        class="dropdown-thumb"
        :src="selected.thumb"
        :alt="selected.title"
        width="40"
        height="40"
      />
      <div>{{ selected.title }}</div>
      <img
        class="dropdown-icon"
        src="/images/icons/dropdown-arrows.svg"
        width="16"
        height="16"
        alt="Change selection"
      />
    </button>
  </div>
</template>

<style>
.dropdown {
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 12px;
}
.dropdown > .dropdown-selection {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  background-color: transparent;
  color: #fff;
  border: 0;
  text-align: left;
}
</style>
