<template>
    <button class="themeable relative rounded-full border-2 border-main 
        w-24 h-12 dark:bg-dark-gray" @click="switchTheme" title="Switch theme">
        <div class="theme-indicator">
            <img src="@/assets/images/sun.svg" alt="Sun icon" class="block dark:hidden">
            <img src="@/assets/images/moon.svg" alt="Moon icon" class="hidden dark:block">
        </div>
    </button>
</template>

<script lang="ts" setup>
    function switchTheme() {
        document.documentElement.classList.toggle('dark')

        if(document.documentElement.classList.contains('dark')) {
            localStorage.setItem('dark-theme', 'true')
        }
        else {
            localStorage.setItem('dark-theme', 'false')
        }
    }
</script>

<style scoped>
    .theme-indicator {
        left: 10px;
        @apply absolute h-8 w-8 bg-main rounded-full flex items-center justify-center
            top-1/2 -translate-y-1/2 transition-all duration-500 
            dark:-translate-x-full;
    }

    .dark .theme-indicator {
        left: calc(100% - 10px); 
    }
</style>