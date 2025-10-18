<template>
  <div class="search-box">
    <img src="/images/icons/search.svg" width="16" height="16" />
    <input type="text" placeholder="Search" />
  </div>
</template>

<style>
.search-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 12px 18px;
  border-radius: 92px;
  height: 46px;
  background-color: #f6f6f6;
}
.search-box > input[type="text"] {
  border: 0;
  background: none transparent;
  font-size: 14px;
  line-height: 22px;
}
</style>
