<script setup>
import CardProject from '@/components/CardsProject/CardProject.vue'

const PROJECTS = [
  {
    name: 'Project 1'
  },
  {
    name: 'Project 2'
  },
  {
    name: 'Project 3'
  },
  {
    name: 'Project 4'
  },
  {
    name: 'Project 5'
  },
  {
    name: 'Project 6'
  }
]
</script>

<template>
  <section class="title">My Work</section>
  <section class="grid">
    <CardProject v-for="project in PROJECTS" :key="project.name" />
  </section>
</template>

<style scoped>
.title {
  font-size: 36px;
  font-weight: 400;
  margin-top: 30px;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  margin-bottom: 60px;
  gap: 28px;
}
</style>
