<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <section class="container-blur">
    <RouterView />
  </section>
</template>

<style scoped> 
.container-blur {
  background: rgba(27, 31, 33, 0.67);
  backdrop-filter: blur(25px);
  height: 100vh;
  width: 100%;
}

</style>


