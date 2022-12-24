import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import type { DropDownItem } from '@/scripts/types'

export const useRecentCitiesStore = defineStore('recentCities', () => {
    const recentCities = ref<DropDownItem[]>([])

    const recentCitiesFromLocalStorage = localStorage.getItem('recent-cities')
    if(recentCitiesFromLocalStorage) {
        recentCities.value = JSON.parse(recentCitiesFromLocalStorage)
    }
    
    function addCity(city : DropDownItem) {
        // Checking that the city with that name is already in array
        if(!recentCities.value.map(recentCity => recentCity.name).includes(city.name)) {
            recentCities.value.push(city)
        }

        if(recentCities.value.length >= 6) {
            recentCities.value.shift()
        }

        localStorage.setItem('recent-cities', JSON.stringify(recentCities.value))
    }

    return { recentCities, addCity }
})