<script>
import navbarMain from '@/components/navbar/navbarMain.vue';
import workSection from '@/components/workContainer/workSection.vue';
import footerContainer from '@/components/footer/footerContainer.vue';

export default {
  components: {
    navbarMain,
    workSection,
    footerContainer
  }
}

</script>

<template >
  <section class="container-align">
    <section class="container">
      <navbarMain />
      <workSection />
      <footerContainer />
    </section>
  </section>
  
</template>

<style scoped>

.container-align {
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
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
  width: 350px;
  height: 100%;
  transition: width 0.5s;
  }
}



</style>
