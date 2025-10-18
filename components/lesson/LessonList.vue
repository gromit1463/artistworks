<script setup>
defineProps({ lessons: Array });
</script>

<template>
  <div class="lessons-list">
    <LessonCard
      v-for="(lesson, index) in lessons"
      :key="index"
      :lesson="lesson"
    />
  </div>
</template>

<style>
.lessons-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
}
</style>
