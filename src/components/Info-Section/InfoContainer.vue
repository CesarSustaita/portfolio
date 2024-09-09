<script>
import PostAboutMe from '@/components/Info-Section/PostAboutMe.vue'

export default {
    components: {
        PostAboutMe
    }
}

</script>

<template>
    <section class="info-container">
        <div class="title">About me</div>
        <PostAboutMe />
        <span class="line"></span>
    </section>
</template>

<style scoped>

.info-container {
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

.title {
    font-size: 40px;
    font-weight: 600;
}

.line {
  border-bottom: 1px solid #8c8c8c;
  margin-top: 60px;
}

@media (max-width: 1400px) {
  .info-container {
    padding-top: 40px;
    padding-left: 60px;
    padding-right: 60px;
  }
}

@media (max-width: 900px) {
  .info-container {
    padding-top: 20px;
    padding-left: 30px;
    padding-right: 30px;
}

.line {
  border-bottom: 1px solid #8c8c8c;
  margin-top: 60px;
}

}

@media (max-width: 700px) {
  .info-container {
    padding-top: 15px;
    padding-left: 24px;
    padding-right: 24px;
}

.line {
  border-bottom: 1px solid #8c8c8c;
  margin-top: 60px;
}

}

</style>