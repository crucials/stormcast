<template>
    <container>
        <navigation-bar/>

        <main class="py-20 px-14 flex justify-between gap-x-6 items-start gap-y-10 sm:flex-col sm:items-center">
            <div class="w-1/3 min-w-2.5 sm:w-full">
                <h1 class="heading" ref="heading">
                    How's the weather?
                </h1>

                <p class="description" ref="description">
                    Look forecasts in almost all cities in the world.
                </p>

                <city-autocomplete-field v-model="city" class="w-full mb-9" @search-queried="goToCityWeather"/>

                <simple-button @click="goToCityWeather">
                    See the weather
                </simple-button>
            </div>

            <figure class="w-5/12 relative h-[34vw] min-w-3 min-h-3 sm:w-full sm:max-w-xs select-none">
                <img src="@/assets/images/snowing.png" alt="Snow in the city" class="picture w-1/2 right-0 top-0" 
                    :class="focusedPictureNumber == 1 ? 'focused-picture' : 'unfocused-picture'">

                <img src="@/assets/images/lightnings.png" alt="Lightnings over the sea" class="picture w-3/4 left-0 top-11
                    rounded-3xl" 
                    :class="focusedPictureNumber == 2 ? 'focused-picture' : 'unfocused-picture'">

                <img src="@/assets/images/raining.png" alt="Rain in the city" class="picture w-3/4 bottom-0 left-14
                    rounded-3xl" 
                    :class="focusedPictureNumber == 3 ? 'focused-picture' : 'unfocused-picture'">
            </figure>
        </main>
    </container>
</template>

<script lang="ts" setup>
    import CityAutocompleteField from '@/components/CityAutocompleteField.vue'
    import NavigationBar from '@/components/NavigationBar.vue'
    import Container from '@/components/Container.vue'

    import router from '@/scripts/router'
    import { onMounted, ref } from 'vue'


    const city = ref('')
    function goToCityWeather() {
        window.location.href = window.origin + '/' + city.value
    }

    const focusedPictureNumber = ref(1)
    setInterval(() => {
        if(focusedPictureNumber.value < 3) {
            focusedPictureNumber.value++
        }
        else {
            focusedPictureNumber.value = 1
        }
    }, 3550)

    const heading = ref<HTMLElement | null>(null)
    const description = ref<HTMLElement | null>(null)
    onMounted(() => {
        setTimeout(() => {
            router.isReady().then(() => {
                heading.value?.classList.add('text-animated')
                setTimeout(() => {
                    description.value?.classList.add('text-animated')
                }, 650)
            })
        }, 400)
    })
</script>

<style scoped>
    .picture {
        @apply transition-transform absolute duration-700 mx-0;
    }

    .focused-picture {
        @apply blur-0 scale-110 z-10;
    }

    .unfocused-picture {
        @apply blur-sm z-0;
    }

    .heading {
        transition: color 0.3s, opacity 0.6s ease-in-out, transform 0.7s cubic-bezier(0.165, 0.84, 0.44, 1);
        @apply font-normal text-black text-4xl mb-6 dark:text-white -translate-y-20 opacity-0;
    }

    .description {
        transition: color 0.3s, opacity 0.8s ease-in-out, transform 1s cubic-bezier(0.39, 0.575, 0.565, 1);
        @apply font-light text-black text-xl dark:text-white mb-6 translate-x-16 opacity-0;
    }

    .text-animated {
        @apply transform-none opacity-100
    }
</style>