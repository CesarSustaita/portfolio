<script setup>
import { LinkedInIcon, ResumeIcon } from '@/icons'

const LINKS = [
  {
    name: 'Resume',
    icon: ResumeIcon,
    link: 'resume.pdf'
  },
  {
    name: 'LinkedIn',
    icon: LinkedInIcon,
    link: 'https://www.linkedin.com/in/cesarsustaita/'
  }
]
</script>

<template>
  <section class="links-container">
    <a :href="link" target="_blank" v-for="{ icon, link, name } in LINKS" :key="name" class="btn">
      <component :is="icon" class="icon" />
    </a>
  </section>
</template>

<style scoped>
.links-container {
  width: 214px;
  height: 44px;
  display: flex;
  justify-content: right;
  gap: 24px;
}

.btn {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
  width: 44px;
  height: 44px;
  border-radius: 60px;
  background-color: rgba(155, 155, 155, 0.502);
  backdrop-filter: blur(60px);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 0px 16px;
}

.btn:hover {
  background-color: rgba(75, 71, 71, 0.35);
  backdrop-filter: blur(180px);
  box-shadow: rgba(10, 10, 10, 0.15) 0px 5px 15px 0px;
}

.icon {
  width: 20px;
  height: 20px;
}

@media (max-width: 700px) {
  .links-container {
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: left;
    gap: 12px;
  }
}
</style>
