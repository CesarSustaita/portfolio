<script>
import navbarMain from '@/components/navbar/navbarMain.vue';
import workSection from '@/components/workContainer/workSection.vue';

export default {
  components: {
    navbarMain,
    workSection
  }
}

</script>

<template >
  <section class="container-align">
    <section class="container">
      <navbarMain />
      <workSection />
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
  transition: width 0.5s;

}

@media (max-width: 1400px) {

  .container {
  display: flex;
  flex-direction: column;
  width: 900px;
  height: 100%;
  transition: width 0.5s;
  }
}

@media (max-width: 900px) {

  .container {
  display: flex;
  flex-direction: column;
  width: 650px;
  height: 100%;
  transition: width 0.5s;
  }
}

@media (max-width: 700px) {
  .container {
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 100%;
  transition: width 0.5s;
  }
}



</style>
