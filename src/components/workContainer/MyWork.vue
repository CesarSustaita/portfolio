<script>
import CardProject from '@/components/workContainer/CardsProject/CardProject.vue';

export default {
    components: {
        CardProject
    }
}

</script>

<template>

    <section class="title">My Work</section>
    <section class="grid">
        <CardProject/>
        <CardProject/>
        <CardProject/>
        <CardProject/>
        <CardProject/>
        <CardProject/>
    </section>

</template>

<style scoped> 

.title {
   font-size: 36px;
   font-weight: 400; 
   margin-top: 30px;
}

.grid {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    margin-bottom: 60px;
    gap: 28px;
}
</style>