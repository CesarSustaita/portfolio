<script></script>

<template>
  <section class="containter">
    <section class="photo-container">
      <img class="photo" src="/post-photos/me.webp" alt="Photo of myself" />
      <span class="line"></span>
    </section>
    <section class="text-subtext">
      <section class="text-container">
        <div class="title">César Sustaita</div>
        <time class="date-container" datetime="2024-07-22">July 22, 2024</time>
      </section>
      <p class="subtitle">
        Since I was a child, I have always been fascinated by how web and mobile applications work. 
        I studied intelligent systems engineering, where I discovered my passion for UX/UI design. 
        I love creating intuitive and efficient user experiences.
      </p>
    </section>
  </section>
</template>

<style scoped>
.containter {
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  gap: 24px;
}

.text-subtext {
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  border: 1px solid black;
}

.photo-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.photo {
  width: 54px;
  height: 54px;
  object-fit: cover;
  object-position: center;
}

.line {
  border-left: 1px solid #8c8c8c;
  height: 130px;
}

.text-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  height: 54px;
}

.title {
  font-size: 20px;
}

.subtitle {
  font-size: 16px;
  width: 550px;
}

@media (max-width: 900px) {
  .containter {
    justify-content: space-between;
    margin-top: 30px;
  }

  .text-subtext {
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 100%;
  }

  .photo-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .photo {
    width: 48px;
    height: 48px;
  }

  .line {
    border-left: 1px solid #8c8c8c;
    height: 110px;
  }

  .text-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:baseline;
  }

  .title {
    font-size: 30px;
  }

  .subtitle {
    font-size: 18px;
    width: 490px;
  }

  @media (max-width: 700px) {
    .containter {
      gap: 14px;
      margin-top: 15px;
    }

    .text-subtext {
      display: flex;
      flex-direction: column;
      gap: 14px;
      width: 100%;
    }

    .photo-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 14px;
    }

    .photo {
      width: 40px;
      height: 40px;
    }

    .line {
      border-left: 1px solid #8c8c8c;
      height: 130px;
    }

    .text-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    .title {
      font-size: 26px;
    }

    .subtitle {
      font-size: 14px;
      width: 240px;
    }

    .date-container {
      font-size: 14px;
    }
  }
}
</style>
