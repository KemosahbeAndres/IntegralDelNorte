<template>
    <div class="grid-leftbar sidebar bg-light">
      <div class="userinfo">
          <UserModelView user-name="Andres Cubillos" />
      </div>
      <ul class="menu">
        <li class="nav-item" v-for="item of routes">
            <router-link class="nav-link" :to="item.path">{{item.name}}</router-link>
        </li>
      </ul>
      <ul class="menu">
        <li class="nav-item">
          <router-link class="nav-link" to="/settings">Ajustes</router-link>
        </li>
        <li class="nav-item">
          <span class="nav-link" @click="logout">Cerrar Sesión</span>
        </li>
      </ul>
    </div>
</template>

<script setup lang="ts">
import UserModelView from './UserModelView.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const title = ref("Dashboard")
const routes = ref([
  {path: "/", name: "Mi Perfil"},
  {path: "/courses", name: "Mis Cursos"},
])
const logout = function(){
  router.push("/")
}
</script>