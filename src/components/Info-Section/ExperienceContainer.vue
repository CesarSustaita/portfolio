<script>  
import ExperienceTemplate from '@/components/Info-Section/Experience/ExperienceTemplate.vue'

export default {
    components: {
        ExperienceTemplate
    }
}

</script>

<template>
    <section class="template">
        <ExperienceTemplate 
            experienceName="Daikin Applied"
            rol="Intern - UX/UI Designer & Frontend Developer"
            date="09/'23 - 09/'24 "
            description="Based on provided requirements, I proposed and developed an 
            internal system for a company product. My responsibilities included designing 
            the user interface and implementing the system in frontend, ensuring it met 
            functional needs and provided an effective user experience."
        />
        <ExperienceTemplate 
            experienceName="AIA Partners"
            rol="UX/UI Designer & System Architect"
            date="03/'23 - 09/'23"
            description="I designed and implemented the internal system structure 
            to optimize the management and visualization of internal processes."
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