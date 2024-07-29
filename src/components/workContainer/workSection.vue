<script>
import greetings from '@/components/workContainer/greetingsArray.vue';

export default {
    components: {
        greetings
    }
}

</script>

<template>
    <section class="container">
        <greetings/>
    </section>
</template>

<style scoped>

.container{
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    height: 100%;
    border-radius: 20px;
    background-color: rgba(58, 56, 56, 0.28);
    backdrop-filter: blur(30px);
    border: 1px solid rgba(140, 140, 140, 0.50);
    padding-top: 80px;
    padding-left: 100px;
    padding-right: 100px;

}

@media (max-width: 900px) {

.container{
    padding-top: 60px;
    padding-left: 60px;
    padding-right: 60px;
}
}

@media (max-width: 700px) {

.container{
    padding-top: 30px;
    padding-left: 24px;
    padding-right: 24px;
}
}

</style>