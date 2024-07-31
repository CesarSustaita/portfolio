<script>

</script>

<template>
    <section class="containter">
        <section class="photo-container">
            <div class="photo"></div>
            <div class="line"></div>
        </section>
        <section class="text-subtext">
            <section class="text-container">
            <div class="title">I´m César Sustaita.</div>
            <div class="date-container">July 22, 2024</div>
        </section>
        <div class="subtitle">I'm a systems engineer and UX/UI designer at Daikin Applied. I design intuitive and functional experiences. As a frontend developer, I turn ideas into usable and attractive products.</div>

        </section>
        
        
    </section>
</template>

<style scoped>

.containter {
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    gap: 24px;
}

.text-subtext {
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 100%;
}

.photo-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.photo{
    width:54px;
    height:54px;
    background-image: url('@/assets/img/photoPost/photo1.svg');
    background-size: cover; 
    background-position: center;
}

.line {
    border-left: 1px solid #8C8C8C;
    height: 130px;
}

.text-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.title {
    font-size: 36px;
}

.subtitle {
    font-size: 20px;
    width: 550px;
}

@media (max-width: 900px) {

.containter {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
}

.text-subtext {
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 100%;
}

.photo-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.photo{
    width:48px;
    height:48px;
    background-image: url('@/assets/img/photoPost/photo1.svg');
    background-size: cover; 
    background-position: center;
}

.line {
    border-left: 1px solid #8C8C8C;
    height: 110px;
}

.text-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.title {
    font-size: 30px;
}

.subtitle {
    font-size: 18px;
    width: 490px;
}

@media (max-width: 700px) {

.containter {
    display: flex;
    flex-direction: row;
    gap: 14px;
    margin-top: 15px;
}

.text-subtext {
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 100%;
}

.photo-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 14px;
}

.photo{
    width:40px;
    height:40px;
    background-image: url('@/assets/img/photoPost/photo1.svg');
    background-size: cover; 
    background-position: center;
}

.line {
    border-left: 1px solid #8C8C8C;
    height: 130px;
}

.text-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
}

.title {
    font-size: 26px;
}

.subtitle {
    font-size: 14px;
    width: 240px;
}

.date-container{
    font-size: 14px;
}

}

}
</style>