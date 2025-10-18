<script setup>
import { ref } from "vue";
const isLoggedIn = useState("isLoggedIn");
const username = ref("");
const password = ref("");

function logIn() {
  console.log({
    username: username.value,
    password: password.value,
  });

  if (username.value === "demo" && password.value === "demo") {
    isLoggedIn.value = true;
  }
}
</script>

<template>
  <form @submit.prevent="logIn">
    <div class="login-form">
      <div class="input-group">
        <label for="username">Username</label>
        <input type="text" v-model="username" placeholder="Enter username" />
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input
          type="password"
          v-model="password"
          placeholder="Enter password"
        />
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
  width: 100%400px;
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
  background-color: var(--blue);
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
}
</style>
