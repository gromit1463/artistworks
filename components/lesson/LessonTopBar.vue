<script setup lang="ts">
import SubmitVideoButton from "./SubmitVideoButton.vue";
</script>

<template>
  <div class="lesson-top-bar">
    <NuxtLink class="lesson-back" to="/lessons">
      <div class="lesson-back-icon">
        <img src="/images/icons/arrow-left.svg" width="16" height="16" />
      </div>
      <span>Lessons</span>
    </NuxtLink>
    <div class="utility">
      <SearchBox />
      <Notifications :number="2" />
      <SubmitVideoButton />
    </div>
  </div>
</template>

<style>
.lesson-top-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 72px;
  padding: 20px 40px;
  border-bottom: 1px solid var(--border-color);
}
.lesson-back {
  display: flex;
  align-items: center;
  flex: 1;
  gap: 10px;
  height: 32px;
  text-decoration: none;
  text-transform: uppercase;
  color: #767676;
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
}
.lesson-back > .lesson-back-icon {
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 50%;
}
.lesson-top-bar > .utility {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
</style>
