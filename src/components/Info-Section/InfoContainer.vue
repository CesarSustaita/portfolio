<script>
import PostAboutMe from '@/components/Info-Section/PostAboutMe.vue'
import PostExperience from '@/components/Info-Section/ExperienceContainer.vue'
import PostInspiration from '@/components/Info-Section/InspirationContainer.vue'

export default {
    components: {
        PostAboutMe,
        PostExperience,
        PostInspiration
    }
}

</script>

<template>
    <section class="info-container">
        <div class="title">About me</div>
        <PostAboutMe />
        <span class="line"></span>
        <div class="title">Experience</div>
        <PostExperience />
        <span class="line"></span>
        <div class="title">Inspiration</div>
        <PostInspiration />
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
  padding-bottom: 80px;
}

.title {
    font-size: 32px;
    font-weight: 400;
    border: 0px solid black;
}

.line {
  border-bottom: 1px solid #8c8c8c34;
  margin-top: 24px;
  margin-bottom: 24px;
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

  .title {
    font-size: 28px;
    font-weight: 400;
  }

  .line {
    border-bottom: 1px solid #8c8c8c34;
    margin-top: 12px;
    margin-bottom: 12px;
  }

}

@media (max-width: 700px) {
  .info-container {
    padding-top: 20px;
    padding-left: 24px;
    padding-right: 24px;
}


}

</style>