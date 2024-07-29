<script>
import navbarMain from '@/components/navbar/navbarMain.vue'

export default {
  components: {
    navbarMain
  }
}

</script>

<template >
  <section class="container-align">
    <section class="container">
      <navbarMain />
    </section>
  </section>
  
</template>

<style scoped>

.container-align {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
}

.container {
  display: flex;
  flex-direction: column;
  width: 1280px;
  height: 100%;
}
</style>
