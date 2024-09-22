<script>

export default {
    name: 'CardProject',
    props: {
        projectName: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        hover: {
            type: String,
            required: true
        }
    }
}

</script>

<template>

    <section class="container-cards" 
    :style="{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.3)), 
      url('./projects/${img}.webp')`}">
      <div class="title-card">{{ projectName }}</div> 
      <div class="title-hover">{{ hover }} </div> 
    </section>

</template>

<style scoped> 

.container-cards {
   position: relative;
   width: 100%;
   height: 420px;
   border-radius: 14px;
   transition: all 0.3s ease;
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   background-size: cover; 
   background-position: center; 
   background-repeat: no-repeat;
   box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
   cursor: pointer;
  
}

.container-cards:hover::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 14px;
  background: rgba(51, 51, 51, 0.4); 
  backdrop-filter: blur(25px);
  z-index: 1;
}

.title-card {
    font-size: 32px;
    font-weight: 600;
    padding-left: 28px;
    padding-bottom: 20px;
    position: relative;
    color: var(--vt-c-white-mute);
    z-index: 0;
}

.title-hover {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.3); 
    font-size: 24px;
    font-weight: 600;
    color: white;
    border-radius: 14px;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    z-index: 2;
}

.container-cards:hover .title-hover {
    visibility: visible;
    opacity: 1;
}

@media (max-width: 900px) {
    .container-cards {
        height: 350px;
        transition: all 0.3s ease;
    }

    .title-card {
        font-size: 26px;
        font-weight: 600;
        padding-left: 24px;
        padding-bottom: 16px;
    }

    .title-hover {
        font-size: 20px;
    }
}

@media (max-width: 700px) {
    .container-cards {
        height: 200px;
        transition: all 0.3s ease;
    }

    .title-card {
        font-size: 20px;
        font-weight: 600;
        padding-left: 14px;
        padding-bottom: 8px;
    }

    .title-hover {
        font-size: 16px;
    }
}


</style>