<script setup>
import { ref } from "vue";

const dropdownData = ref([
  {
    title: "Banjo with Noam Pikelny",
    thumb: "/images/thumbnails/noam-pikelny.png",
  },
  {
    title: "Bass with Victor Wooten",
    thumb: null,
  },
  {
    title: "Drums with Chad Smith",
    thumb: null,
  },
]);
</script>

<template>
  <div class="lesson-container">
    <div class="sidebar">
      <div class="lesson-logo"></div>
      <Dropdown :items="dropdownData" />
      <LessonNavigation />
    </div>
    <div class="content"></div>
  </div>
</template>

<style>
.lesson-container {
  display: flex;
}
.lesson-container > .sidebar {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 233px;
  min-height: 100vh;
  color: #fff;
  background-color: #052444;
  padding: 20px 20px;
}
.lesson-container > .sidebar .lesson-logo {
  width: 40px;
  height: 40px;
  background-image: url(/images/AW_WM_and_Logo_Slate_HiRes.png);
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 40px 41px;
  margin-bottom: 10px;
}
.lesson-container > .content {
}
</style>
