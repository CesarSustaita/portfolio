<script>

export default {
    name: 'ExperienceTemplate',
    props: {
        experienceName: {
            type: String,
            required: true
        },
        rol: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
    }

}


</script>

<template>
    <section class="container">
        <section class="experience-name">{{ experienceName }} </section>
        <section class="content">
            <section class="rol-date">
                <section class="rol">{{ rol }}</section>
                <section class="date"> {{ date }} </section>
            </section>
            <section class="description">
                <p>
                    {{ description }}
                </p>
            </section>    
        </section>
    </section>
</template>

<style scoped>

.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.experience-name {
    font-size: 26px;
}

.content{
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.rol-date {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.rol {
    font-size: 24px;
}

.date {
    font-size: 18px;
    color: var(--text-bg-white-date);
}

.description {
    color: var(--text-bg-white-description);
    font-size: 18px;
}

@media (max-width: 1400px) { 
    .content{
    width: 370px;
    }
}

@media (max-width: 900px) {
    .container {
    display: flex;
    flex-direction: column;
    gap: 12px;
    }

    .content{
    width: 100%;
    gap: 16px;
    }

    .experience-name {
    font-size: 24px;
    
    }

    .rol {
    font-size: 20px;
    
    }
}

@media (max-width: 700px) {

    .date {
    font-size: 15px;
    }
    .description {
    font-size: 15px;
    }
}


</style>