<template>
    <nav class="themeable px-5 py-2.5 border-b-2 relative bg-white 
        border-gray-100 dark:bg-soft-black dark:border-zinc-800">

        <div class="justify-between items-center gap-x-5 flex gap-y-7 sm:flex-wrap 
            sm:justify-center h-full" :class="visibleOnMobile ? '' : 'sm:hidden'">
            <router-link to="/">
                <img src="@/assets/images/logo.svg" alt="Stormcast logo" class="w-36 min-w-1">
            </router-link>
            
            <div v-show="showSearchField" class="flex justify-center items-center gap-x-4 w-4/12 min-w-3 sm:w-full sm:order-3">
                <city-autocomplete-field v-model="city" class="w-[90%]" @search-queried="goToCityWeather"/>
            
                <button class="transition-transform duration-300 p-2 bg-main rounded-lg hover:scale-110 
                    flex-shrink-0" @click="goToCityWeather">
                    <img src="@/assets/images/search.svg" alt="Loupe icon" class="w-6 h-6">
                </button>
            </div>
            
            <div class="flex justify-center items-center gap-x-10 gap-y-5 flex-wrap-reverse">
                <drop-down-list list-title="Seen recently" :items="recentCities.length > 0 ? recentCities : 
                        [ { name: 'You haven\'t checked any weather forecasts yet' } ]" />
            
                <theme-switcher />
            </div>
        </div>

        <button class="absolute -bottom-20 right-5 p-2 rounded-full bg-main hidden items-center justify-center 
            sm:flex" @click="visibleOnMobile = !visibleOnMobile">
            <img src="@/assets/images/options.svg" alt="Three dots icon" class="w-12 h-12" :hidden="visibleOnMobile">
            <img src="@/assets/images/close.svg" alt="Three dots icon" class="w-12 h-12" :hidden="!visibleOnMobile">
        </button>
    </nav>
</template>

<script lang="ts" setup>
    import ThemeSwitcher from '@/components/ThemeSwitcher.vue'
    import CityAutocompleteField from '@/components/CityAutocompleteField.vue'

    import { ref, type PropType } from 'vue'
    import router from '@/scripts/router'
    import { useRecentCitiesStore } from '@/stores/recent-cities'
    import { storeToRefs } from 'pinia'


    defineProps({
        showSearchField: {
            type: Boolean as PropType<boolean>,
            default: false
        }
    })

    const { recentCities } = storeToRefs(useRecentCitiesStore())

    const city = ref('')
    function goToCityWeather() {
        window.location.href = window.origin + '/' + city.value
    }
    
    const visibleOnMobile = ref(false)
</script>

<style>

</style>