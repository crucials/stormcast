<template>
    <button class="relative transition-transform duration-300 ease-in-out p-3 px-6 font-normal text-base bg-main 
        3xl:text-xl text-white rounded-xl hover:-translate-y-1 overflow-hidden after:absolute after:w-full 
        after:h-full after:bg-[#7672ba] after:top-0 after:left-0 after:rounded-full after:scale-0" 
        :class="{
            'after:transition-transform after:duration-300 after:scale-110': clickAnimationPlaying
        }" @click="playClickAnimation">

        <span class="relative z-10">
            <slot></slot>
        </span>

    </button>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';

    const clickAnimationPlaying = ref(false)

    function playClickAnimation() {
        clickAnimationPlaying.value = true
        setTimeout(() => {
            clickAnimationPlaying.value = false
        }, 300)
    }
 </script>

<style scoped>

</style>