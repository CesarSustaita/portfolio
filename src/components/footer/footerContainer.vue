<template>

<section class="container-footer">
  
  <section class="section-main">
    <div class="logo-section">
      <div class="logo"></div>
      <div class="description">
      <p>Designed and Built by César Sustaita.</p>
      </div>
    </div>
    <div class="copyright">
      <p>© 2024 César Sustaita. All rights reserved.</p>
    </div>
  </section>

  <section class="section-links">
    <a class="btn-link" href="/fallback" target="_blank">
      <button class="date" >Resume </button> 
      <div class="arrow-link"></div>
    </a>
    <a class="btn-link" href="https://www.linkedin.com/in/cesarsustaita/" target="_blank">
      <button class="date" >LinkedIn </button> 
      <div class="arrow-link"></div>
    </a>
    <a class="btn-link" href="https://github.com/CesarSustaita" target="_blank">
      <button class="date" >Github </button> 
      <div class="arrow-link"></div>
    </a>
    
  </section>
  
</section>

</template>

<style scoped>

a{
  all: unset;
}

.container-footer {
  margin-top: 54px;
  margin-bottom: 34px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
}

.section-main {
  display:flex;
  flex-direction: column;
  gap: 12px;
}

.logo-section{
  display: flex;
  flex-direction: row;
}

.description{
  font-size: 20px;
  color: var(--vt-c-white-mute);
}

.copyright{
  font-size: 16px;
  color: var(--text-bg-white);
}

.section-links{
  display: flex;
  flex-direction: row;
  gap: 18px;
}

.btn-link{
    display: flex;
    flex-direction: row;
    align-items: end;
}

.btn-link:hover{
    display: flex;
    flex-direction: row;
    align-items: end;
    cursor: pointer;
}

.arrow-link{
    background-image: url('/src/assets/Arrow up-right.svg');
    width: 22px;
    height: 25px;
    object-fit: cover;
    object-position: center;
    align-items: center;
    margin-left: 2px;
}

button {
    all: unset;
    border-bottom: 1px solid rgba(0, 0, 0, 0);
}

button:hover {
    cursor: pointer;
    border-bottom: 1px solid rgba(129, 129, 129, 0.647);
}

.date {
    font-size: 20px;
    color: var(--text-bg-white-description);
}


@media (max-width: 900px) {

.container-footer {
  flex-direction: column-reverse;
  align-items: center;
  gap: 28px;
}

.section-main {
  display:flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}

.description{
  font-size: 18px;
}

.copyright{
  font-size: 14px;
}

.date {
    font-size: 18px;
}

}

</style>