<script>

export default {
    name: 'InspirationTemplate',
    props: {
        name: {
            type: String,
            required: true
        },
        rol: {
            type: String,
            required: true
        },
        link: {
            type: String,
        default: 'Visit Link'
        },
        description: {
            type: String,
            required: false
        },
    },
    methods: {
    navigateToLink() {
      window.open('https://' + this.link, '_blank');
    }
  }

}


</script>

<template>
    <section class="container">
        <section class="experience-name">{{ name }} </section>
        <section class="content">
            <section class="rol-date">
                <section class="rol">{{ rol }}</section>
            </section>
            <section class="description">
                <p>
                    {{ description }}
                </p>
            </section>  
            <section class="btn-link" v-if="link" @click="navigateToLink">
                <button class="date" > {{ link }} </button> 
                <div class="arrow-link"></div>
            </section> 
        </section>
    </section>
</template>

<style scoped>

.btn-link{
    display: flex;
    flex-direction: row;
    align-items: end;
}

.btn-link:hover{
    display: flex;
    flex-direction: row;
    align-items: end;
    cursor: pointer;
}

.arrow-link{
    background-image: url('/src/assets/icons/Arrow up-right.svg');
    width: 22px;
    height: 25px;
    object-fit: cover;
    object-position: center;
    align-items: center;
    margin-left: 2px;
}

button {
    all: unset;
    border-bottom: 1px solid rgba(0, 0, 0, 0);
}

button:hover {
    cursor: pointer;
    border-bottom: 1px solid rgba(129, 129, 129, 0.647);
}


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
    gap: 4px;
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
    gap: 4px;
    }

    .experience-name {
    font-size: 20px;
    
    }

    .rol {
    font-size: 16px;
    
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