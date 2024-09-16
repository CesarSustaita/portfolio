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
a {
  outline: none;
  text-decoration: none;
}

a:focus {
  outline: none;
  box-shadow: none;
  border: none;
}

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
  background-color: rgba(94, 94, 94, 0.164);
  backdrop-filter: blur(50px);
  border: 1px solid rgba(140, 140, 140, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.btn:hover {
  background-color: rgba(94, 94, 94, 0.405);
  backdrop-filter: blur(50px);
  border: 1px solid rgba(140, 140, 140, 0.5);
  color: var(--btn-active-text-color);
}

.btn:focus {
  outline: none;
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
