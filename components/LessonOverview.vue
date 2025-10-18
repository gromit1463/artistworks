<script setup></script>

<template>
  <div class="lesson-container">
    <div class="sidebar">
      <div class="lesson-logo"></div>
    </div>
    <div class="content"></div>
  </div>
</template>

<style>
.lesson-container {
  display: flex;
}
.lesson-container > .sidebar {
  width: 233px;
  min-height: 100vh;
  color: #fff;
  background-color: #052444;
  padding: 20px 15px;
}
.lesson-container > .sidebar .lesson-logo {
  width: 40px;
  height: 40px;
  background-image: url(/images/AW_WM_and_Logo_Slate_HiRes.png);
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 40px 41px;
}
.lesson-container > .content {
}
</style>
