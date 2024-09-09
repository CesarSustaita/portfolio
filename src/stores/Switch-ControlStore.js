import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSwitchControlStore = defineStore('switchControl', () => {
    const switchValue = ref(true);

    function setSwitchValue(value) {
        switchValue.value = value;
    }

    return { switchValue, setSwitchValue };
});