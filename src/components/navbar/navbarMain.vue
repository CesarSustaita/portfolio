<script>

import navControls from '@/components/navbar/navbarControls.vue'

export default {
    components: {
        navControls
    }
}

</script>

<template>

<section class="navbar">
    <section class="titleLogo">César Sustaita</section>
    <section class="btnControls"><navControls/></section>
    <section class="btnLinks">btn1 btn2</section>

</section>

</template>

<style scoped> 
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1280px;
    height: 44px;
    border: 0px solid red;
    margin-top: 46px;
}

.titleLogo{
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 3.5px;
    width: 200px;
}


</style>