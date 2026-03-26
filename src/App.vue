<template>
  <nav>
    <RouterLink to="/">Inicio</RouterLink>
    <RouterLink :to="`/product/${12312312}`">Producto</RouterLink>
  </nav>

  <RouterView />
</template>
