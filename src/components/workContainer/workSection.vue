<script setup>
import GreetingsArray from '@/components/WorkContainer/GreetingsArray.vue'
import IntroductionPost from '@/components/WorkContainer/IntroductionPost.vue'
import MyWork from '@/components/WorkContainer/MyWork.vue'
</script>

<template>
  <section class="container">
    <GreetingsArray />
    <IntroductionPost />
    <span class="line"></span>
    <MyWork />
  </section>
</template>

<style scoped>
.container {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  border-radius: 20px;
  background-color: rgba(94, 94, 94, 0.164);
  backdrop-filter: blur(50px);
  border: 1px solid rgba(140, 140, 140, 0.5);
  padding-top: 80px;
  padding-left: 100px;
  padding-right: 100px;
}

.line {
  border-bottom: 1px solid #8c8c8c;
  margin-top: 60px;
}

@media (max-width: 1400px) {
  .container {
    padding-top: 40px;
    padding-left: 60px;
    padding-right: 60px;
  }
}

@media (max-width: 900px) {
  .container {
    padding-top: 20px;
    padding-left: 30px;
    padding-right: 30px;
  }

  .line {
    border-bottom: 1px solid #8c8c8c;
    margin-top: 50px;
  }
}

@media (max-width: 700px) {
  .container {
    padding-top: 15px;
    padding-left: 24px;
    padding-right: 24px;
  }

  .line {
    border-bottom: 1px solid #8c8c8c;
    margin-top: 40px;
  }
}
</style>
