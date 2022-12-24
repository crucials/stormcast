<template>
    <router-view></router-view>
</template>

<script lang="ts" setup>
    if(localStorage.getItem('dark-theme') == null) {
        const darkThemeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches
        localStorage.setItem('dark-theme', String(darkThemeEnabled))
    }

    if(localStorage.getItem('dark-theme') == 'true') {
        document.documentElement.classList.add('dark')
    }
</script>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    @font-face {
        font-family: 'Work Sans';
        src: url('./assets/fonts/WorkSans-Regular.woff');
        font-weight: normal;
    }

    @font-face {
        font-family: 'Work Sans';
        src: url('./assets/fonts/WorkSans-Light.woff');
        font-weight: 300;
    }

    @font-face {
        font-family: 'Work Sans';
        src: url('./assets/fonts/WorkSans-Medium.woff');
        font-weight: 500;
    }

    * {
        @apply font-work-sans selection:bg-main selection:text-white;
    }

    .themeable {
        @apply transition-colors duration-300;
    }
</style>