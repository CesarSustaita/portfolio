<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const GREETINGS = [
  'Hola.',
  'Hi.',
  'Bonjour.',
  'Ciao.',
  'Привет.',
  'こんにちは.',
  'Hei.',
  'Merhaba.',
  'Hallo.',
  'مرحبا.'
]

const currentGreeting = ref(0)

const updateGreeting = () => {
  const nextGreeting = currentGreeting.value + 1
  currentGreeting.value = nextGreeting % GREETINGS.length
}

let intervalId

onMounted(() => {
  const INTERVAL_TIME = 3000

  // Cambia cada 3 segundos 
  intervalId = setInterval(updateGreeting, INTERVAL_TIME)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <section class="greetings">
    <transition name="fade">
      <p :key="currentGreeting">{{ GREETINGS[currentGreeting] }}</p>
    </transition>
  </section>
</template>

<style scoped>
.greetings {
  font-size: 64px;
  line-height: auto;
  font-weight: 600;
  height: 84px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
  position: absolute;
 
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  
}

@media (max-width: 900px) {
  .greetings {
    font-size: 50px;
    height: 62px;
  }
}

@media (max-width: 700px) {
  .greetings {
    font-size: 34px;
    position: relative;
    height: 58px;
  }
}
</style>
