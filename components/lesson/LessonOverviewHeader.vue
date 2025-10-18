<script setup>
defineProps({
  title: String,
  topics: Number,
  lessonVideos: Number,
  videoExchanges: Number,
});
</script>
<template>
  <div class="lesson-overview-header">
    <h1>{{ title }}</h1>
    <div class="lesson-overview-stats">
      {{ topics }} Topics &bull; {{ lessonVideos }} Lesson Videos &bull;
      {{ videoExchanges }} Video Exchanges
    </div>
  </div>
  <div class="lesson-view-options">
    <div class="left"></div>
    <div class="right"></div>
  </div>
</template>

<style>
.lesson-overview-header {
  padding: 24px;
}
.lesson-overview-header h1 {
  font-size: 56px;
  font-weight: 700;
  line-height: 56px;
}
.lesson-overview-header > .lesson-overview-stats {
  margin: 30px 0;
}
</style>
