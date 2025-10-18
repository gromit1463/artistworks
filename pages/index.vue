<script setup>
const isLoggedIn = useState("isLoggedIn", () => true);
</script>
<template>
  <div class="container-main">
    <div v-if="!isLoggedIn">
      <LogIn />
    </div>
    <div v-else>
      <LessonOverview />
    </div>
  </div>
</template>
