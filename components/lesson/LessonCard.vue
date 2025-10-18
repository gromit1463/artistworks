<script setup>
import ProgressBar from "@/components/ui/ProgressBar.vue";
defineProps({ lesson: Object });
</script>

<template>
  <div class="lesson-card">
    <div class="lesson-description">
      <img :src="lesson.thumb" width="90" height="60" />
      <div class="lesson-info">
        {{ lesson.title }}
        <div class="lesson-type">
          {{ lesson.type }}
        </div>
      </div>
      <div class="lesson-actions">
        <button>
          <img src="/images/icons/bookmark.svg" width="24" height="24" />
        </button>
        <button>
          <img
            src="/images/icons/checkmark-circle.svg"
            width="24"
            height="24"
          />
        </button>
      </div>
    </div>
    <ProgressBar :progress="lesson.progress" :duration="lesson.duration" />
  </div>
</template>

<style>
.lesson-card {
  border: 1px solid var(--border-color);
  padding: 16px;
  border-radius: 12px;
}
.lesson-description {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
}
.lesson-description > .lesson-info {
  flex: 1;
}
.lesson-description > .lesson-info .lesson-type {
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
  color: #595959;
}
.lesson-description .lesson-actions {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.lesson-description .lesson-actions > button {
  background: none transparent;
  border: 0;
}
</style>
