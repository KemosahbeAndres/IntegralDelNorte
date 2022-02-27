<template>
  <div
    id="login-container"
    className="container"
  >
    <div className="login-card">
      <h3 className="text-center">
        Login
      </h3>
      <form
        name="loginForm"
        className="d-grid gap-2"
        @submit.prevent="login"
      >
        <input
          name="username"
          type="text"
          className="form-control mt-2"
          placeholder="RUT o Correo"
          v-model="username"
        />
        <input
          name="password"
          type="password"
          className="form-control mt-2"
          placeholder="Password"
          v-model="password"
        />
        <input
          name="submit"
          type="submit"
          className="btn btn-primary"
          value="Entrar"
        />
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import router from '../router/index'

export default {
  name: "LoginView",
  data: () => {
    return {
      usename: "",
      password: ""
    }
  },
  methods: {
    login(){
      router.push({name: 'UserView'})
    }
  }
}

</script>
