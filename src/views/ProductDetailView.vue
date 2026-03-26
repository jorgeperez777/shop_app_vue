<template>
    <div>
        <h1>Producto 🛍️</h1>

        <div v-if="isLoading">
            cargando...
        </div>

        <div v-if="error">
            {{ error }}
        </div>
        <div v-if="!error && !isLoading">
            <img :src="product.url_image" :alt="product.name" />
            <h3>{{ product.name }}</h3>
        </div>
    </div>
</template>

<script setup>
import { getProduct } from '@/services/ProductsApi';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
const slug = route.params.slug
const product = ref({})

const isLoading = ref(true)
const error = ref(null)

onMounted(async () => {
    isLoading.value = true
    try {
        const response = await getProduct({ slug: slug })
        product.value = response.data.data
        isLoading.value = false
    } catch (error) {
        isLoading.value = false
        console.log(error)
    }
})
</script>

<style lang="scss" scoped></style>