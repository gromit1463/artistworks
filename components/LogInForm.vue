<script setup>
const isLoggedIn = useState("isLoggedIn");
const username = ref("");
const password = ref("");

function logIn() {
  console.log({
    username,
    password,
  });
}
</script>

<template>
  <form @submit.prevent="logIn">
    <div class="login-form">
      <div class="input-group">
        <label for="username">Username</label>
        <input type="text" :value="username" />
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input type="password" :value="password" />
      </div>
      <button class="login-button" type="submit" @click="logIn">
        Continue
      </button>
    </div>
  </form>
</template>

<style>
.login-form {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 400px;
  margin: 30px 0;
}
.login-form .input-group {
  display: flex;
  gap: 10px;
  flex-direction: column;
}
.login-form input[type="text"],
.login-form input[type="password"] {
  border-radius: 12px;
  border: 1px solid #d3d6df;
  padding: 12px 16px;
}
.login-form .login-button {
  width: 100%;
  height: 52px;
  border-radius: 100px;
  border: 0;
  background-color: #4285f4;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
}
</style>
