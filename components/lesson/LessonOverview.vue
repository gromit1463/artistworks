<script setup>
const dropdownData = [
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
];

const lessons = [
  {
    title: "Diatonic Chords: 1st Inversion - Chord Shapes and Qualities",
    type: "Lesson",
    thumb: "/images/thumbnails/thumb1.png",
    progress: 100,
    duration: "23:23",
    saved: true,
  },
  {
    title: "Diatonic Chords: 1st Inversion - Chord Shapes and Qualities",
    type: "Lesson",
    thumb: "/images/thumbnails/thumb1.png",
    progress: 90,
    duration: "21:59",
    saved: false,
  },
  {
    title: "Diatonic Chords: 1st Inversion - Chord Shapes and Qualities",
    type: "Lesson",
    thumb: "/images/thumbnails/thumb1.png",
    progress: 50,
    duration: "18:01",
    saved: false,
  },
  {
    title: "Diatonic Chords: 1st Inversion - Chord Shapes and Qualities",
    type: "Lesson",
    thumb: "/images/thumbnails/thumb1.png",
    progress: 60,
    duration: "12:49",
    saved: false,
  },
  {
    title: "Diatonic Chords: 1st Inversion - Chord Shapes and Qualities",
    type: "Lesson",
    thumb: "/images/thumbnails/thumb1.png",
    progress: 30,
    duration: "24:26",
    saved: false,
  },
  {
    title: "Diatonic Chords: 1st Inversion - Chord Shapes and Qualities",
    type: "Lesson",
    thumb: "/images/thumbnails/thumb1.png",
    progress: 0,
    duration: "14:21",
    saved: false,
  },
];
</script>

<template>
  <div class="lesson-container">
    <div class="sidebar">
      <div class="lesson-logo"></div>
      <Dropdown :items="dropdownData" />
      <LessonNavigation />
    </div>
    <div class="content">
      <LessonTopBar />
      <LessonList :lessons="lessons" />
    </div>
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
.lesson-container > .content {
  width: calc(100vw - 233px);
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
