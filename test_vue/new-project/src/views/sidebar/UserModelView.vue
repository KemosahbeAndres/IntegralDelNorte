<template>
    <img class="circle mb-4" src="https://source.unsplash.com/random/200x200/" alt="">
    <h5>{{userName}}</h5>
</template>

<script setup lang="ts">
defineProps({
    userName: String
})

</script>