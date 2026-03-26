<template>
    <div>
        <h1>Producto {{ slug }} 🛍️</h1>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()
const slug = route.params.slug
console.log(slug)
</script>

<style lang="scss" scoped></style>