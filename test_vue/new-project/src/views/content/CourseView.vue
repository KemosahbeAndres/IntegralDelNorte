<template>
    <div class="container py-4">
        <h1>{{title}}</h1>
        <h5>Cantidad Secciones: {{courseData.modules.length || "Not found"}}</h5>
        <hr>
        <h4 v-for="module of courseData.modules">ID: {{module.id}} - {{module.name}}</h4>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute} from 'vue-router'
import DataList from '../../data-list.json'
import { state } from '../../state'

const route = useRoute()
console.log("RUTA:", route)
console.log("ID", route.params)

onMounted(()=>{
    state.title = courseData.name
})

const title = computed(()=>{
    return state.title = courseData.name
})

const courseData = computed(() => {
    let thisCourse = {}
    let IDFound = false
    for(let course of DataList.courses){
        if(course.id == route.params.id){
            thisCourse = course
            IDFound = true
        }
    }
    if(IDFound){
        let modulesIds = thisCourse.modules
        let modules = []
        for(let id of modulesIds){
            for(let module of DataList.modules){
                if(module.id == id) modules.push(module)
            }
        }
        if(modules.length > 0) thisCourse.modules = modules
    }
    return thisCourse
})

</script>