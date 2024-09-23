<script setup>
import CardProject from '@/components/CardsProject/CardProject.vue'
import ModalProject from '@/components/CardsProject/ModalProject.vue';
import { ref } from 'vue';

const PROJECTS = [
  {
    isShow: true,
    projectName: 'Ecotide',
    img: 'Ecotide',
    hover: 'View Project',
    description: 'Web platform where you can explore detailed information about the ocean, phytoplankton species, and the difference between ocean gardens and land gardens, featuring visually stunning imagery for viewers and immersive ocean sounds.',
    projectDate: 'Sep 2023',
    position: 'Led UX/UI Design',
    location: 'Space Apps Hackathon, Querétaro, Mexico',
    build: 'Figma, Vue3.js',
  
  },
  {
    isShow: true,
    projectName: 'Nourish',
    img: 'Nourish',
    hover: 'View Project',
    description: 'Mobile-first web application designed to tackle food insecurity by offering personalized menus and recipes tailored to students nutritional needs. Created during the WaffleHacks 2023 hackathon, this project was the result of collaboration with an exceptional, multidisciplinary team.',
    projectDate: 'Jun 2023',
    position: 'Led UX/UI Design',
    location: 'WaffleHacks 2023 Hackathon, Remote SLP, Mexico',
    build: 'Figma, Vue3.js',
  },
  {
    isShow: false,
    projectName: 'Design System',
    img: 'comingsoon1',
    hover: 'Coming Soon',
    description: '',
    projectDate: '',
    position: '',
    location: '',
    build: '',
  },
  {
    isShow: false,
    projectName: 'ETN',
    img: 'comingsoon2',
    hover: 'Coming Soon',
    description: '',
    projectDate: '',
    position: '',
    location: '',
    build: '',
  },
  
  
];

const showModal = ref(false);
const selectedProject = ref(null); 

const openModal = (project) => {
  if(project.isShow === true)
  {
    selectedProject.value = project; 
    showModal.value = true;
  }
  else {
    showModal.value = false;
  }
};

</script>

<template>
  <section class="title">My Work</section>
  <section class="grid">
    <CardProject 
    v-for="project in PROJECTS" 
    :key="project.projectName" 
    :projectName="project.projectName" 
    :img="project.img" 
    :hover="project.hover"
    @click="openModal(project)"
 
    />
  </section>

  <Teleport to="body">
    <ModalProject :show="showModal" @close="showModal = false">
      <template #header>
        {{ selectedProject?.projectName || '---' }}
      </template>
      <template #description>
        {{ selectedProject?.description || '---' }}
      </template>
      <template #projectDate>
        {{ selectedProject?.projectDate || '---' }}
      </template>
      <template #position>
        {{ selectedProject?.position || '---' }}
      </template>
      <template #location>
        {{ selectedProject?.location || '---' }}
      </template>
      <template #build>
        {{ selectedProject?.build || '---' }}
      </template>
    </ModalProject>
  </Teleport>

</template>

<style scoped>
.title {
  font-size: 36px;
  font-weight: 400;
  margin-top: 30px;
}

.grid {
  margin-top: 40px;
  margin-bottom: 60px;
  display: grid;
  grid-template-columns: 348px 348px 348px;
  justify-content: space-between; 
  row-gap: 22px;
  transition: all 0.3s ease;
}

@media (max-width: 1400px) {

  .grid {
  display: grid;
  grid-template-columns: 368px 368px;
  justify-content: space-around; 
  row-gap: 22px;
  transition: all 0.3s ease;
}
}

@media (max-width: 900px) {

  .grid {
  display: grid;
  grid-template-columns: 286px 286px;
  justify-content: space-between; 
  row-gap: 18px;
  transition: all 0.3s ease;
}
}

@media (max-width: 700px) {

  .grid {
  display: grid;
  grid-template-columns: 146px 146px;
  justify-content: space-between; 
  row-gap: 10px;
  transition: all 0.3s ease;
}

}


</style>
