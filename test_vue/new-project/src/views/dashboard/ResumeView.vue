<template>
    <h2>Resume View</h2>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { state } from '../../state'

onMounted(()=>{
    state.title = "Dashboard"
})

</script>