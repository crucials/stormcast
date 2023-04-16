<template>
    <container>
        <navigation-bar show-search-field/>

        <div class="h-96 flex items-center justify-center" v-if="dataLoading">
            <spinner/>
        </div>

        <main class="py-20 px-14 sm:px-6" v-if="!dataLoading">
            <h2 class="themeable font-normal flex items-center gap-x-3 text-3xl dark:text-white mb-12">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_18_719)">
                        <path
                            d="M50.6666 24C50.6666 13.6907 42.3092 5.33333 31.9999 5.33333C21.6906 5.33333 13.3333 13.6907 13.3333 24C13.3333 27.6987 14.4266 31.1387 16.2799 34.04H16.2586C22.5519 43.8933 31.9999 58.6667 31.9999 58.6667L47.7412 34.04H47.7226C49.5732 31.1387 50.6666 27.6987 50.6666 24ZM31.9999 32C27.5813 32 23.9999 28.4187 23.9999 24C23.9999 19.5813 27.5813 16 31.9999 16C36.4186 16 39.9999 19.5813 39.9999 24C39.9999 28.4187 36.4186 32 31.9999 32Z"
                            class="themeable fill-black dark:fill-white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_18_719">
                            <rect width="64" height="64" class="themeable fill-white dark:fill-black" />
                        </clipPath>
                    </defs>
                </svg>

                Weather in {{ cityName }}
            </h2>

            <div class="flex justify-center items-center gap-x-[7%] flex-wrap gap-y-10">
                <button class="h-20 w-20 rounded-full bg-main flex justify-center items-center 
                    transition-colors duration-300 hover:bg-main/80 lg:order-2 lg:w-16
                    lg:h-16" @click="goToPreviousSlide">
                    <img src="@/assets/images/left-arrow.svg" alt="Left white arrow">
                </button>

                <ul class="w-7/12 lg:order-1 lg:w-full lg:min-w-3 min-h-4.5 relative">
                    <weather-card v-for="forecastDay in weather" :key="weather.indexOf(forecastDay)"
                        :weather="forecastDay" class="h-full absolute w-full top-0 left-0 opacity-0 rotate-6
                        -translate-x-4 -translate-y-5"
                        :class="{
                            'weather-card-visible': (currentSlideNumber == weather.indexOf(forecastDay) + 1),
                        }"/>
                </ul>

                <button class="h-20 w-20 rounded-full bg-main flex justify-center items-center 
                    transition-colors duration-300 hover:bg-main/80 lg:order-3 lg:w-16 lg:h-16"
                    @click="goToNextSlide">
                    <img src="@/assets/images/right-arrow.svg" alt="Right white arrow">
                </button>
            </div>
        </main>
    </container>
</template>

<script lang="ts" setup>
    import Container from '@/components/Container.vue'
    import NavigationBar from '@/components/NavigationBar.vue'
    import WeatherCard from '@/components/weather-page/WeatherCard.vue'

    import { ref, toRefs, watch } from 'vue'
    import { useRoute } from 'vue-router'
    import router from '@/scripts/router'

    import { useCityApiTokenStore } from '@/stores/city-api-token'
    import { findCities } from '@/scripts/city-search'
    import type { DailyWeather, City } from '@/scripts/types'
    import { useSlider } from '@/composables/slider'
    import { useRecentCitiesStore } from '@/stores/recent-cities'

    
    const dataLoading = ref(true)
    const forecastDayCount = ref(12)
    const { currentSlideNumber, goToNextSlide, goToPreviousSlide } = useSlider(forecastDayCount)

    const { accessToken } = toRefs(useCityApiTokenStore())
    const requestedCity = useRoute().params.city.toString()
    const cityName = ref('')

    const weather = ref<DailyWeather[]>([])

    if(accessToken.value != '') {
        resolveCity()
    }
    else {
        watch(accessToken, (newAccessTokenValue: string) => {
            if (newAccessTokenValue != '' && dataLoading.value) {
                resolveCity()
            }
        }) 
    }


    function resolveCity() {
        findCities(requestedCity, accessToken.value).then(cities => {
            if (cities.length > 0) {
                const foundCity = cities[0]
                cityName.value = foundCity.name

                getWeather(foundCity).then(weatherFromServer => {
                    weather.value = weatherFromServer
                    dataLoading.value = false

                    const { addCity } = useRecentCitiesStore()
                    addCity({ name: cityName.value, link: window.location.href })
                })
            }
            else {
                router.push('/not-found')
            }
        })
    }

    async function getWeather(city : City) : Promise<DailyWeather[]> {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.geoCode.latitude}&longitude=${city.geoCode.longitude}&daily=weathercode,temperature_2m_max,windspeed_10m_max,shortwave_radiation_sum&windspeed_unit=ms&timezone=auto&past_days=5`)
        
        const jsonFromServer = await response.json()
        const weather : DailyWeather[] = []
        
        if(jsonFromServer.error == true) {
            router.push('/not-found')
        }
        else {
            const daily = jsonFromServer.daily
            daily.time.forEach((date : any) => {
                const dayIndex = daily.time.indexOf(date)
                
                weather.push({
                    date: new Date(date),
                    weatherCode: daily['weathercode'][dayIndex],
                    temperature: daily['temperature_2m_max'][dayIndex],
                    windSpeed: daily['windspeed_10m_max'][dayIndex],
                    radiationAmount: daily['shortwave_radiation_sum'][dayIndex]
                })
            })
        }

        return weather
    }
</script>

<style>
    .weather-card-visible {
        @apply opacity-100 transform-none pointer-events-auto !important;
    }
</style>