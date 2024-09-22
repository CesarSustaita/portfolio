<script setup>
import CardProject from '@/components/CardsProject/CardProject.vue'

const PROJECTS = [
  {
    projectName: 'Ecotide',
    img: 'Ecotide',
    hover: 'View Project'
  },
  {
    projectName: 'Nourish',
    img: 'Nourish',
    hover: 'View Project'
  },
  {
    projectName: 'Design System',
    img: 'comingsoon1',
    hover: 'Coming Soon'
  },
  {
    projectName: 'ETN',
    img: 'comingsoon2',
    hover: 'Coming Soon'
  },
  
  
]
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
    />
  </section>
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
