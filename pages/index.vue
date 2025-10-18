<script setup>
const isLoggedIn = useState("isLoggedIn", () => false);
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
