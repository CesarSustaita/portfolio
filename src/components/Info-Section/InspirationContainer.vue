<script>    
import InspirationTemplate from '@/components/Info-Section/Inspiration/InspirationTemplate.vue'

export default {
    components: {
        InspirationTemplate
    }
}

</script>

<template>
    <section class="template">
        <InspirationTemplate 
        name="Jacob Flores"
        rol="Software Support Engineer"
        link="jacobflores.dev "
        description="Thank you for your invaluable help and guidance, 
        which have been key to moving the project forward."
        />

        <InspirationTemplate 
        name="Adrian Zumbrunnen"
        rol="Human Interface Team at Apple"
        link="azumbrunnen.me/ "
        
        />

        <InspirationTemplate 
        name="Julia Jhonson"
        rol="Product Designer"
        link="juliacodes.com"

        />

    </section>
</template>

<style scoped>

.template {
    margin-top: 24px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    gap: 48px;
}

</style>