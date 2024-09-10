<script></script>

<template>
  <section class="about-me">
    <div class="text">
      <p class="p">
        My passion for UX/UI design started during my engineering studies 
        when I worked on a university project that exposed me to the full 
        design process. 
      </p>
      <p class="p"> 
        Since then, I’ve focused on creating intuitive and efficient products, 
        inspired by the minimalist and functional approach of Apple’s systems. 
      </p>
    </div>
    <div class="text">
      <p class="p">
        I’ve worked on university projects, hackathons, startups, and companies, 
        where I’ve led the design and participated in the implementation on web platforms, 
        including frontend development.
      </p>
      <p class="p"> 
        I aim to make every interface visually appealing and easy to use, ensuring a smooth 
        and enjoyable experience for users. 
      </p>
    </div>
  </section>
</template>

<style scoped>

.about-me {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 28px;
}

.p{
  margin-bottom: 12px;
}

.text{
  width: 500px;
  font-size: 18px;
  color: var(--text-bg-white);
}

@media (max-width: 1400px) { 

  .text{
  width: 370px;
  font-size: 18px;
  }
}

@media (max-width: 900px) {

  .about-me {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
  }

  .p{
  margin-bottom: 16px;
  }

  .text{
  width: 100%;
  font-size: 18px;
  }

}

@media (max-width: 700px) {

  .about-me {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 14px;
  }

  .text{
  width: 100%;
  font-size: 16px;
  }
}
</style>
