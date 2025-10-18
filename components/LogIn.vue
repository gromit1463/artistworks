<script setup>
import { ref } from "vue";
const isLoggedIn = useState("isLoggedIn");
</script>

<template>
  <div class="container-login">
    <div class="sidebar">
      <h1>
        Welcome <br />
        Back
      </h1>
      <div class="logo-subdued"></div>
    </div>
    <div class="content">
      <div class="login-form-wrapper">
        <div>
          <div class="login-mini-logo"></div>
          <h2>Sign in to ArtistWorks</h2>
          <div>
            New user?
            <NuxtLink to="/sign-up">Create an account.</NuxtLink>
          </div>
          <LogInForm />
          <TextDivider>Or sign in with</TextDivider>
          <div class="button-group">
            <IconButton
              iconSrc="/images/icons/logo-google.svg"
              alt="Log in with Google"
            >
              Google
            </IconButton>
            <IconButton
              iconSrc="/images/icons/logo-apple.svg"
              alt="Log in with Apple"
            >
              Apple
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.container-login {
  display: flex;
  width: 100vw;
}
.container-login > .sidebar {
  position: relative;
  width: 415px;
  height: 100vh;
  left: 0px;
  top: 0px;
  background: linear-gradient(139.18deg, #052444 38.31%, #4285f4 88.24%);
  padding: 50px;
}
.container-login .sidebar h1 {
  color: #fff;
  font-size: 56px;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: 0;
}
.container-login > .content {
  width: calc(100vw - 415px);
  height: 100vh;
  flex-grow: 1;
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
.container-login .login-form-wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container-login .login-mini-logo {
  width: 48px;
  height: 48px;
  background: url(/images/AW_WM_and_Logo_Purple_LoRes_Web_Transparent.png);
  background-position: 3px 0;
  background-repeat: no-repeat;
  background-size: 275px 48px;
}

.container-login .login-form-wrapper h2 {
  font-size: 36px;
  line-height: 44px;
  letter-spacing: -2%;
  font-weight: 700;
  margin: 30px 0;
}
.container-login .button-group {
  display: flex;
  gap: 15px;
}
.container-login .button-group .icon-button {
  flex: 1;
}

@media screen and (max-width: 992px) {
  .container-login > .sidebar {
    display: none;
  }
  .container-login > .content {
    display: block;
    width: 400px;
    padding: 0 20px;
  }
}

@media screen and (max-width: 640px) {
  .container-login > .content {
    width: 100%;
    padding-top: 50px;
  }
  .container-login .login-form-wrapper {
    display: block;
  }
}
</style>
