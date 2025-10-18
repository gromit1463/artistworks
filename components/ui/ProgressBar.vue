<script setup>
defineProps({ progress: Number, duration: String });
</script>

<template>
  <div class="progress-bar">
    <div class="bar">
      <div class="bg"></div>
      <div class="fg" :style="{ width: `${progress}%` }"></div>
    </div>
    <div class="duration">{{ duration }}</div>
  </div>
</template>

<style>
.progress-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 100%;
}
.progress-bar > .bar {
  position: relative;
  flex: 1;
  height: 10px;
}
.progress-bar > .bar > .bg {
  width: 100%;
  height: 10px;
  background-color: #f6f6f6;
  border-radius: 5px;
}
.progress-bar > .bar > .fg {
  position: absolute;
  top: 0;
  left: 0;
  height: 10px;
  background-color: #266dd3;
  border-radius: 5px;
}
</style>
