<script setup>
defineProps({ number: Number });
</script>

<template>
  <div class="notification-wrapper">
    <div v-if="number" class="notification-badge">
      {{ number }}
    </div>
  </div>
</template>

<style>
.notification-wrapper {
  position: relative;
  width: 46px;
  height: 46px;
  background-color: #f6f6f6;
  border-radius: 50%;
  background-image: url(/images/icons/notifications.svg);
  background-position: center center;
  background-repeat: no-repeat;
}
.notification-wrapper > .notification-badge {
  position: absolute;
  bottom: 10px;
  right: 8px;
  width: auto;
  min-width: 14px;
  height: 14px;
  text-align: center;
  border-radius: 7px;
  padding-top: 1px;
  width: auto;
  font-size: 10px;
  font-weight: 700;
  line-height: 10px;
  color: #fff;
  background-color: #960766;
}
</style>
