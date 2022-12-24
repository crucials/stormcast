import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCityApiTokenStore = defineStore('cityApiToken', () => {
    const tokenReceived = ref(false)
    const accessToken = ref('')
    updateToken()
    setInterval(() => updateToken(), 1500000)

    async function updateToken() {
        const response = await fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=SszJt6cAgUb7gmYeYdc8aMxSX0CsoKOA&client_secret=3Uml0HtlIAwx5H5c'
        })
    
        accessToken.value = (await response.json())['access_token']
        tokenReceived.value = true
    }

    return { accessToken }
})