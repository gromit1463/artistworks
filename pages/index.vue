<script setup>
import LogIn from "~/components/account/LogIn.vue";
import LessonOverview from "~/components/lesson/LessonOverview.vue";
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
