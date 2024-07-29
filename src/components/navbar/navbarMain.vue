<script>

import navControls from '@/components/navbar/navbarControls.vue';
import buttonLinks from '@/components/navbar/buttonLinks.vue';

export default {
    components: {
        navControls,
        buttonLinks
    }
}

</script>

<template>

<section class="navbar">
    <section class="titleLogo">César Sustaita</section>
    <section class="btnControls"><navControls/></section>
    <section class="btnLinks"><buttonLinks/></section>

</section>

</template>

<style scoped> 
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 44px;
    border: 0px solid red;
    margin-top: 46px;
}

.titleLogo{
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 3.5px;
    width: 214px;
}


@media (max-width: 900px) {

.titleLogo{
    display: none;
}
}




</style>