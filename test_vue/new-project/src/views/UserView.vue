<template>
  <div class="container-full">
    <div class="grid-topbar bg-light text-center">
      <button @click="goBack" class="btn btn-dark">Atras</button>
      <h1>{{$route.params}}</h1>
    </div>
    <SideBar/>
    <div class="grid-content">
      <ResumeView />
    </div>
  </div>
</template>

<script setup lang="ts">
import SideBar from "../views/sidebar/SideBar.vue"
import ResumeView from "./dashboard/ResumeView.vue"
import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted, computed } from 'vue'
import state from '../state'

const router = useRouter()
const route = useRoute()

// onMounted(()=>{
//     router.push("/dashboard/")
// })

const title = ref("Dashboard")

const goBack = () => {
  router.back()
}

</script>
