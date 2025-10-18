<template>
  <div class="text-divider">
    <span class="content"><slot /></span>
  </div>
</template>

<style>
.text-divider {
  background: linear-gradient(
    to bottom,
    transparent calc(50% - 0.5px),
    var(--border-color) calc(50% - 0.5px),
    var(--border-color) calc(50% + 0.5px),
    transparent calc(50% + 0.5px)
  );
  text-align: center;
  margin: 1em;
}
.text-divider .content {
  display: inline-block;
  color: #767676;
  background-color: #fff;
  padding: 0 10px;
  width: auto;
  height: auto;
}
</style>
