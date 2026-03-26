<template>
    <div>
        <h1>Bienvenido a la tienda 🏠</h1>

        <div v-if="isLoading">
            cargando...
        </div>

        <div v-if="error">
            {{ error }}
        </div>

        <div v-if="!error && !isLoading">
            <div v-for="product in products" :key="product.id">
                <RouterLink :to="`/product/${product.slug}`">
                    <img :src="product.url_image" :alt="product.name" />
                    <h3>{{ product.name }}</h3>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { getProducts } from '@/services/ProductsApi';
import { onMounted, ref } from 'vue';

const products = ref([])

const isLoading = ref(true)
const error = ref(null)


onMounted(async () => {
    isLoading.value = true
    try {
        const response = await getProducts({ size_items: 10, page: 1 })
        products.value = response.data.data
        isLoading.value = false
    } catch (error) {
        isLoading.value = false
        console.log(error)
    }
})
</script>

<style lang="scss" scoped></style>