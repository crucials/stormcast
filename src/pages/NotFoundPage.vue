<template>
    <container>
        <navigation-bar show-search-field/>

        <main class="py-20 px-28 flex justify-between gap-x-6 items-start gap-y-16 lg:flex-col-reverse 
            lg:items-center">
            <img src="@/assets/images/desert.png" alt="Desert photo" class="w-[30%] min-w-2.5 lg:w-full lg:max-w-xs">

            <div class="w-2/5 min-w-2.5 lg:w-full">
                <h1 class="themeable font-normal text-black text-4xl dark:text-white mb-9">
                    City not found
                </h1>

                <p class="themeable font-light text-black text-xl dark:text-white mb-9">
                    Check entered name for typos and try again. Perhaps we don’t have data for requested city. 
                </p>

                <simple-button @click="returnToMainPage">
                    Return to main page
                </simple-button>
            </div>
        </main>
    </container>
</template>

<script lang="ts" setup>
    import NavigationBar from '@/components/NavigationBar.vue'
    import Container from '@/components/Container.vue';

    import router from '@/scripts/router'

    
    function returnToMainPage() {
        setTimeout(() => {
            router.push('/')
        }, 200)
    }
</script>

<style>

</style>