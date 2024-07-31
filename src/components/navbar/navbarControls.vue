<script>
import { ref } from 'vue';

export default{
    setup(){
        const picked = ref('Work');

        return {
            picked
        }
    }
}

</script>

<template>
    <section class="container">
        <input type="radio" id="work" value="Work" class="btn" v-model="picked" />
        <label for="work" class="custom-btn">Work</label>
        <input type="radio" id="info" value="Info" class="btn" v-model="picked" />
        <label for="info" class="custom-btn">Info</label>
  </section>
    
</template>

<style scoped>

.container{
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 214px;
    height: 44px;
    border-radius: 60px;
    background-color: rgba(155, 155, 155, 0.502);
    backdrop-filter: blur(60px);
    box-shadow: rgba(197, 197, 197, 0.1) 0px 0px 16px;
}

.btn {
  display: none;
}

.custom-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border-radius: 30px;
  background-color: var(--btn-bg-color);
  color: var(--btn-text-color);
  width: 99px;
  height: 38px;
  cursor: pointer;
  transition: background-color 0.3s;
  
}

.custom-btn:hover {
    background-color: rgba(3, 3, 3,0.35);
    backdrop-filter: blur(180px);
}

.btn:checked + .custom-btn {
  background-color: rgba(3, 3, 3,0.35);
  backdrop-filter: blur(180px);
  color: var(--btn-active-text-color);
}

@media (max-width: 700px) {

.container{
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 190px;
  height: 44px;
  border-radius: 60px;
  background-color: rgba(155, 155, 155, 0.502);
  backdrop-filter: blur(60px);
}

.btn {
  display: none;
}

.custom-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border-radius: 30px;
  background-color: var(--btn-bg-color);
  color: var(--btn-text-color);
  width: 87px;
  height: 38px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.custom-btn:hover {
    background-color: rgba(3, 3, 3,0.35);
    backdrop-filter: blur(180px);
}

.btn:checked + .custom-btn {
  background-color: rgba(3, 3, 3,0.35);
  backdrop-filter: blur(180px);
  color: var(--btn-active-text-color);
}

}

</style>