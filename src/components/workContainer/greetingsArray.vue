<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default{
setup(){
    const greetings = [
    "Hola",
    "Hi",
    "Bonjour",
    "Ciao",
    "Привет",
    "こんにちは",
    "Hei",
    "Merhaba",
    "Hallo",
    "مرحبا"
    ]

    const currentGreeting = ref(0);

    const updateGreeting = () => {
      currentGreeting.value = (currentGreeting.value + 1) % greetings.length;
    };

    let intervalId;

    onMounted(() => {
      intervalId = setInterval(updateGreeting, 3000); // Cambia cada 2 segundos
    });

    onUnmounted(() => {
      clearInterval(intervalId);
    });

    return {greetings, currentGreeting}
}
}

</script>

<template>
    <section class="greetings">
        {{ greetings[currentGreeting] }}
    </section>
</template>

<style scoped>

.greetings{
    font-size: 64px;
    line-height: auto;
    font-weight: 600;
}

@media (max-width: 900px) {

.greetings{
    font-size: 50px;
}
}

@media (max-width: 700px) {

.greetings{
    font-size: 40px;
}
}

</style>