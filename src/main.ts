import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './scripts/router'
import uiKitComponents from './scripts/ui-kit-components'

import App from './App.vue'

export const CITY_API_URL = 'https://test.api.amadeus.com/v1/reference-data/locations/cities'

const app = createApp(App)

uiKitComponents.forEach(component => {
    if(component.__name) {
        app.component(component.__name, component)
    }
})

app.use(router).use(createPinia()).mount('#app')