<template>
    <div class="spinner"></div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'
</script>

<style scoped>
    .spinner {
        @apply w-24 h-24 border-2 border-transparent border-t-main border-r-main rounded-full;
        animation: loading 1s linear infinite;
    }

    @keyframes loading {
        100% {
            transform: rotate(360deg)
        }
    }
</style>