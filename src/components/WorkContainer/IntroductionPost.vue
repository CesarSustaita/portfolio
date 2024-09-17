<script></script>

<template>
  <section class="containter">
    <!---->
    <section class="photo-container">
      <img class="photo" src="/post-photos/me.webp" alt="Photo of myself" />
      <span class="line"></span>
    </section>
    
    <section class="text-subtext">
      <section class="text-container">
        <div class="title">I'm  César Sustaita.</div>
        <time class="date-container" datetime="2024-07-22">Sep 01, 2024</time>
      </section>
      <p class="subtitle">
        I'm a Systems Engineer and UX/UI Designer at Daikin Applied. I design intuitive and
        functional experiences. As a Frontend Developer, I turn ideas into usable and attractive
        products.
      </p>
    </section>
  </section>
</template>

<style scoped>

br {
  display: none;
}

.containter {
  display: flex;
  flex-direction: row;
  margin-top: 28px;
  gap: 24px;
  border: 0px solid black;
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
  width: 54px;
  height: 54px;
  object-fit: cover;
  object-position: center;
}

.line {
  border: 1px solid #8c8c8c34;
  height: 130px;
}

.text-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.title {
  font-size: 36px;
  
}

.subtitle {
  font-size: 20px;
  width: 550px;
  color: var(--text-bg-white-description);
}

.date-container{
  color: var(--text-bg-white-date);
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
    border: 1px solid #8c8c8c34;
    height: 110px;
  }

  .text-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .title {
    font-size: 30px;
  }

  .subtitle {
    font-size: 18px;
    width: 490px;
  }

  .date-container{
  visibility: hidden;
  }

  @media (max-width: 700px) {

    br {
      display:flex;
    }
    .containter {
      gap: 14px;
      margin-top: 0px;
    }

    .text-subtext {
      display: flex;
      flex-direction: column;
      gap: 14px;
      width: 100%;
    }

    .photo-container {
      display: none;
    }

    .photo {
      width: 40px;
      height: 40px;
    }

    .line {
      border: 1px solid #8c8c8c34;
      height: 130px;
    }

    .text-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    .title {
      font-size: 32px;
    }

    .subtitle {
      font-size: 14px;
      width: 100%;
    }

    .date-container{
    display: none;
    }
  }
}
</style>
