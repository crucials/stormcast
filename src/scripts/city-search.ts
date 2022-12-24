import { CITY_API_URL } from '@/main'
import type { City } from '@/scripts/types'

export async function findCities(name : string, accessToken : string) : Promise<City[]> {
    const response = await fetch(CITY_API_URL + `?keyword=${name}&max=5`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    const foundCities : City[] = []
    if(response.ok) {
        const jsonData = (await response.json()).data
        
        if(jsonData) {
            jsonData.forEach((city : any) => {
                foundCities.push({ name: city.name, geoCode: city.geoCode })
            })
        }
    }

    return foundCities
}