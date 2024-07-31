<script>

</script>

<template>

    <section class="links-container">
        <button class="btn" id="resume"><img src="@/assets/icons/resume.svg" class="icon"></button>
        <a href="https://www.linkedin.com/in/c%C3%A9sar-sustaita-8278a6279/" class="btn linkedln" >
        <img src="@/assets/icons/in.svg" class="icon">
        </a>

    </section>
</template>

<style scoped>

.links-container{
 width: 214px;
 height: 44px;
 display: flex;
 justify-content: right;
 gap: 24px;
}

.btn{
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

.btn:hover{
    background-color: rgba(75, 71, 71, 0.35);
    backdrop-filter: blur(180px);
    box-shadow: rgba(10, 10, 10, 0.15) 0px 5px 15px 0px;
}

.icon{
    width: 20px;
    height: 20px;
}

@media (max-width: 700px) {

.links-container{
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: left;
    gap: 12px;
}
}



</style>