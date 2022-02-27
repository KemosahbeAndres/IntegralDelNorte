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
      >
        <input
          name="username"
          type="text"
          className="form-control mt-2"
          placeholder="RUT o Correo"
        />
        <input
          name="password"
          type="password"
          className="form-control mt-2"
          placeholder="Password"
        />
        <input
          name="submit"
          type="submit"
          className="btn btn-primary"
          value="Ingresar"
        />
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'LoginView',
    setup(){}
})
</script>
