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
}

.icon{
    width: 20px;
    height: 20px;
}



</style>