<script setup>
const menu = [
  { icon: "/images/icons/home.svg", title: "Home", href: "/", active: false },
  {
    icon: "/images/icons/lessons.svg",
    title: "Lessons",
    href: "/lessons",
    active: true,
  },
  {
    icon: "/images/icons/video-exchanges.svg",
    title: "Video Exchanges",
    href: "/video-exchanges",
    active: false,
  },
  {
    icon: "/images/icons/study-materials.svg",
    title: "Study Materials",
    href: "/study-materials",
    active: false,
  },
  {
    icon: "/images/icons/bookmarks.svg",
    title: "Bookmarks",
    href: "/bookmarks",
    active: false,
  },
  {
    icon: "/images/icons/history.svg",
    title: "History",
    href: "/history",
    active: false,
  },
  { divider: true },
  {
    icon: "/images/icons/metronome.svg",
    title: "Metronome",
    href: "/metronome",
    active: false,
  },
  {
    icon: "/images/icons/scale-browser.svg",
    title: "Scale Browser",
    href: "/scale-browser",
    active: false,
  },
  { divider: true },
  {
    icon: "/images/icons/community.svg",
    title: "Community",
    href: "/community",
    active: false,
  },
];
</script>

<template>
  <nav class="lesson-menu sidebar-nav-menu">
    <div class="menu-item" v-for="(item, index) in menu">
      <hr v-if="item.divider" />
      <NuxtLink
        v-else
        :key="index"
        :to="item.href"
        :class="{ active: item.active }"
      >
        <img :src="item.icon" width="16" height="16" :alt="item.title" />
        {{ item.title }}
      </NuxtLink>
    </div>
  </nav>
</template>

<style>
.lesson-menu {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.lesson-menu hr {
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.lesson-menu > .menu-item a {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  padding: 12px;
  color: #fff;
  text-decoration: none;
  background-color: transparent;
  transition: background-color 250ms;
  border-radius: 8px;
}
.lesson-menu > .menu-item a.active,
.lesson-menu > .menu-item a:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
