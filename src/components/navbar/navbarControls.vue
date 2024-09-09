<script>
import { useSwitchControlStore } from '@/stores/Switch-ControlStore.js';
import { ref, watch } from 'vue';

export default {
  setup() {
    const switchControlStore = useSwitchControlStore();
    const picked = ref(true);

    watch(picked, (newVal) => {
      switchControlStore.setSwitchValue(newVal === 'true');
    });

    return { picked };
  }
};
</script>

<template>
  <section class="container">
    <input type="radio" id="work" value=true class="btn" v-model="picked" />
    <label for="work" class="custom-btn">Work</label>
    <input type="radio" id="info" value=false class="btn" v-model="picked" />
    <label for="info" class="custom-btn">Info</label>
  </section>
</template>

<style scoped>
.container {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 214px;
  height: 44px;
  border-radius: 60px;
  background-color: rgba(94, 94, 94, 0.164);
  backdrop-filter: blur(50px);
  border: 1px solid rgba(140, 140, 140, 0.5);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
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
  background-color: rgba(94, 94, 94, 0.164);
  backdrop-filter: blur(180px);
}

.btn:checked + .custom-btn {
  background-color: rgba(94, 94, 94, 0.164);
  backdrop-filter: blur(50px);
  border: 0px solid rgba(140, 140, 140, 0.5);
  color: var(--btn-active-text-color);
}

@media (max-width: 700px) {
  .container {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 190px;
    height: 44px;
    border-radius: 60px;
    background-color: rgba(94, 94, 94, 0.164);
    backdrop-filter: blur(50px);
    border: 1px solid rgba(140, 140, 140, 0.5);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
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
    background-color: rgba(3, 3, 3, 0.35);
    backdrop-filter: blur(180px);
  }

  .btn:checked + .custom-btn {
    background-color: rgba(94, 94, 94, 0.164);
    backdrop-filter: blur(50px);
    border: 0px solid rgba(140, 140, 140, 0.5);
    color: var(--btn-active-text-color);
  }
}
</style>
@/stores/Switch-ControlStore.js