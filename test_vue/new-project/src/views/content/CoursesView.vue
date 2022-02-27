<template>
    <router-view v-if="'id' in $route.params"></router-view>
    <div class="container py-2" v-else>
        <h2>{{title}}</h2>
        <ul class="list-group my-2">
            <router-link class="list-group-item" v-for="course in courseList" key="{{course.id}}" :to="'/courses/'+course.id" >{{course.name}}</router-link>
        </ul>
    </div>
    
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import dataList from '../../data-list.json'
import { state } from '../../state'

const router = useRouter()
const route = useRoute()

console.log("ROUTER:", router)
console.log("RUTA:", route.name)
console.log("ID", route.params)

const courseList = computed(() => {
    return dataList.courses
})

const title = computed(()=>{
    return state.title = "Cursos"
})

</script>