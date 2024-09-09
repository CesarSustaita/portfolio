<script setup>
import NavbarMain from '@/components/navbar/NavbarMain.vue'
import WorkSection from '@/components/WorkContainer/WorkSection.vue'
import InfoContainer from '@/components/Info-Section/InfoContainer.vue'
import footerContainer from '@/components/footer/footerContainer.vue'
import { useSwitchControlStore } from '@/stores/Switch-ControlStore.js';
import {  computed } from 'vue';

const switchControlStore = useSwitchControlStore();
const switchControl = computed(() => switchControlStore.switchValue);

</script>

<template>
  <section class="container-align">
    <section class="container">
      <NavbarMain />
      <WorkSection v-if="switchControl"/>
      <InfoContainer v-else />
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
