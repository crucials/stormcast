import { findCities } from '@/scripts/city-search'
import { ref, toRefs, watch, type Ref } from 'vue'
import { useCityApiTokenStore } from '@/stores/city-api-token'

export function useCitySuggestions(modelValue : Ref<string>) {
    const { accessToken } = toRefs(useCityApiTokenStore())
    const suitableItems = ref<string[]>([])

    let currentTimeoutId : number
    watch(modelValue, () => {
        clearTimeout(currentTimeoutId)

        currentTimeoutId = setTimeout(() => {
            suitableItems.value = []
            const newValue = modelValue.value.trim().toLowerCase()

            if(newValue.length >= 3) {
                findCities(newValue, accessToken.value).then(cities => {
                    cities.forEach(city => {
                        suitableItems.value.push(city.name)
                    })
                })
            }
        }, 300)
    })

    return { suitableItems }
}