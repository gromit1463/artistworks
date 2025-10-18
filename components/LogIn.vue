<script setup></script>

<template>
  <div class="container-login">
    <div class="sidebar">
      <h2>
        Welcome <br />
        Back
      </h2>
      <div class="logo-subdued"></div>
    </div>
  </div>
</template>

<style>
.container-login {
  display: flex;
  width: 100vw;
}
.container-login .sidebar {
  position: absolute;
  width: 415px;
  height: 100%;
  left: 0px;
  top: 0px;
  background: linear-gradient(139.18deg, #052444 38.31%, #4285f4 88.24%);
  padding: 50px;
}
.container-login .sidebar h2 {
  color: #fff;
  font-size: 56px;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: 0;
}
.container-login .content {
  width: calc(100vw - 415px);
  height: 100vh;
}
.container-login .logo-subdued {
  position: absolute;
  width: 432.87px;
  height: 498px;
  left: -106.4px;
  bottom: -120px;
  background: url(/images/AW_Full_Logo_White.png);
  background-position: 40px 92px;
  background-repeat: no-repeat;
  mix-blend-mode: normal;
  opacity: 25%;
  transform: scale(1.5);
}
</style>
