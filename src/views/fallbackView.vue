<template>

    <section class="container">
        <section class="fallback">
            <div class="img"></div>
            <div class="title">Be right back.</div>
            <div class="description">
                <p>I’m busy updating my resume for you.</p>
                <p>You might check my <a href="https://www.linkedin.com/in/cesarsustaita/" target="_blank">LinkedIn.</a></p>
            </div>
        </section>
    </section>
        
</template>

<style scoped> 

.container {
    display: flex;
    min-height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
    
}

.fallback{
    display: flex;
    flex-direction: column;
    width: 500px;
    gap: 20px;
    align-items: center;
}

.title{
    display: flex;
    justify-content: center;
    font-size: 54px;
    font-weight: 500;
}

.description{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 28px;
}

a{
    all: unset;
    cursor: pointer;
    font-weight: 600;
    border-bottom: 1px solid rgba(0, 0, 0, 0);
}

a:hover{
    border-bottom: 1px solid rgba(129, 129, 129, 0.647);
}

.img{
    width: 85px;
    height: 85px;
    background-image: url('/src/assets/fallback-logo.svg');
    background-size: cover;
    background-position: center;
}

@media (max-width: 700px) {

.fallback{
    display: flex;
    flex-direction: column;
    width: 350px;
    gap: 16px;
}

.title{
    display: flex;
    justify-content: center;
    font-size: 48px;
    font-weight: 500;
}

.description{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
}

.img{
    width: 64px;
    height: 64px;
    background-image: url('/src/assets/fallback-logo.svg');
    background-size: cover;
    background-position: center;
}

}

</style>