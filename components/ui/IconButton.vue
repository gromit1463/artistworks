<script setup>
defineProps({ iconSrc: String, alt: String });
</script>

<template>
  <button class="icon-button">
    <img :src="iconSrc" :alt="alt" width="24" height="24" />
    <span class="content">
      <slot />
    </span>
  </button>
</template>

<style>
.icon-button {
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  justify-content: center;
}
.icon-button > .content {
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0;
}
button.icon-button {
  border: 1px solid #1b1b1b;
  background-color: #fff;
  color: #1b1b1b;
  height: 52px;
  border-radius: 12px;
  padding: 10px 20px;
}
</style>
