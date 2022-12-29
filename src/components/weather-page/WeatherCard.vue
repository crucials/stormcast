<template>
    <li class="weather-card">
        <div class="flex items-center gap-x-9 mb-9 min-w-3">
            <img :src="'' + condition?.iconFilename" alt="Weather icon" class="w-36 sm:w-32">

            <p class="font-light text-2xl themeable dark:text-white sm:text-xl">
                {{ condition?.title }}
            </p>
        </div>

        <time :datetime="`${weather.date.getUTCMonth() + 1}-${weather.date.getDate()}`" 
            class="block font-light text-2xl mb-7 themeable dark:text-white sm:text-xl">
            {{ weather.date.toLocaleString('en', { weekday: 'long', month: 'long', day: '2-digit' }) }}
        </time>

        <ul class="flex flex-col gap-y-5">
            <li class="flex items-center gap-x-3" title="Temperature">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15 2.5C17.6777 2.5 19.8638 4.60496 19.9939 7.25024L20 7.49978L20.0012 15.91L20.0705 15.982C21.0653 17.0673 21.6912 18.4465 21.8404 19.9323L21.8663 20.277L21.875 20.625C21.875 24.422 18.797 27.5 15 27.5C11.203 27.5 8.125 24.422 8.125 20.625C8.125 18.9937 8.6974 17.4528 9.70756 16.2363L9.93068 15.9807L9.99875 15.9088L10 7.5C10 4.90863 11.9713 2.7777 14.4962 2.52507L14.7504 2.50612L15 2.5ZM15 5C13.682 5 12.6023 6.01985 12.5069 7.31346L12.5 7.50005L12.4996 16.9913L12.0834 17.364C11.1608 18.1898 10.625 19.3628 10.625 20.625C10.625 23.0412 12.5838 25 15 25C17.4162 25 19.375 23.0412 19.375 20.625C19.375 19.4534 18.9134 18.3586 18.1092 17.547L17.9176 17.3648L17.5017 16.9923L17.5 7.5C17.5 6.11929 16.3807 5 15 5ZM15 10C15.6904 10 16.25 10.5596 16.25 11.25L16.251 17.7605C17.3542 18.2429 18.125 19.344 18.125 20.625C18.125 22.3509 16.7259 23.75 15 23.75C13.2741 23.75 11.875 22.3509 11.875 20.625C11.875 19.3435 12.6464 18.2421 13.7502 17.7599L13.75 11.25C13.75 10.5596 14.3096 10 15 10Z"
                        class="themeable fill-black dark:fill-white"/>
                </svg>

                <p class="themeable font-normal text-xl dark:text-white">
                    {{ weather.temperature }} °C
                </p>
            </li>

            <li class="flex items-center gap-x-3" title="Wind speed">
                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M25.9631 16.0687H0.636207C0.284766 16.0687 0 15.7838 0 15.4325C0 15.0811 0.284766 14.7962 0.636207 14.7962H25.8401C25.8799 14.7884 25.921 14.7844 25.9631 14.7844C28.0388 14.7844 29.7276 13.0956 29.7276 11.0199C29.7276 8.94416 28.0388 7.25532 25.9631 7.25532C23.8874 7.25532 22.1986 8.94407 22.1986 11.0198C22.1986 11.3712 21.9139 11.656 21.5624 11.656C21.211 11.656 20.9262 11.3712 20.9262 11.0198C20.9262 8.24246 23.1858 5.98291 25.9631 5.98291C28.7404 5.98291 31 8.24246 31 11.0198C31 13.7533 28.8114 15.9852 26.0945 16.055C26.0521 16.064 26.0082 16.0687 25.9631 16.0687Z"
                        class="themeable fill-black dark:fill-white"/>
                    <path
                        d="M12.9178 11.662H0.636207C0.284766 11.662 0 11.3772 0 11.0258C0 10.6745 0.284766 10.3896 0.636207 10.3896H12.7948C12.8346 10.3818 12.8757 10.3777 12.9178 10.3777C14.9935 10.3777 16.6823 8.68898 16.6823 6.61325C16.6823 4.53752 14.9935 2.84877 12.9178 2.84877C10.842 2.84877 9.15324 4.53752 9.15324 6.61325C9.15324 6.9646 8.86847 7.24946 8.51703 7.24946C8.16559 7.24946 7.88083 6.9646 7.88083 6.61325C7.88083 3.83591 10.1405 1.57635 12.9178 1.57635C15.6951 1.57635 17.9547 3.83591 17.9547 6.61325C17.9547 9.34673 15.7661 11.5786 13.0492 11.6484C13.0068 11.6573 12.9628 11.662 12.9178 11.662Z"
                        class="themeable fill-black dark:fill-white"/>
                    <path
                        d="M20.7137 29.4238C17.9364 29.4238 15.6767 27.1643 15.6767 24.3869C15.6767 24.0356 15.9615 23.7507 16.3129 23.7507C16.6644 23.7507 16.9492 24.0356 16.9492 24.3869C16.9492 26.4627 18.6379 28.1514 20.7137 28.1514C22.7894 28.1514 24.4782 26.4627 24.4782 24.3869C24.4782 22.3112 22.7894 20.6225 20.7137 20.6225H0.636207C0.284766 20.6225 0 20.3376 0 19.9862C0 19.6349 0.284766 19.35 0.636207 19.35H20.7137C23.4911 19.35 25.7506 21.6096 25.7506 24.3869C25.7506 27.1643 23.4911 29.4238 20.7137 29.4238Z"
                        class="themeable fill-black dark:fill-white"/>
                </svg>

                <p class="themeable font-normal text-xl dark:text-white">
                    {{ weather.windSpeed }} m/s
                </p>
            </li>

            <li class="flex items-center gap-x-3" title="Solar radiation amount">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_24_83)">
                        <path
                            d="M15 7.48605C10.8568 7.48605 7.48608 10.8574 7.48608 15.0007C7.48608 19.1439 10.8568 22.5153 15 22.5153C19.1426 22.5153 22.514 19.1446 22.514 15.0007C22.514 10.8567 19.1426 7.48605 15 7.48605Z"
                            class="themeable fill-black dark:fill-white"/>
                        <path
                            d="M15.0001 5.27724C14.1903 5.27724 13.5339 4.6209 13.5339 3.81178V1.46612C13.5339 0.656333 14.1903 0 15.0001 0C15.8098 0 16.4662 0.656333 16.4662 1.46612V3.81178C16.4662 4.6209 15.8092 5.27724 15.0001 5.27724Z"
                            class="themeable fill-black dark:fill-white"/>
                        <path
                            d="M15.0001 24.7221C14.1903 24.7221 13.5339 25.3784 13.5339 26.1882V28.5332C13.5339 29.3437 14.1903 30 15.0001 30C15.8098 30 16.4662 29.3437 16.4662 28.5332V26.1882C16.4662 25.3784 15.8092 24.7221 15.0001 24.7221Z"
                            class="themeable fill-black dark:fill-white"/>
                        <path
                            d="M21.8743 8.12512C21.3023 7.55249 21.3023 6.62445 21.8743 6.05182L23.5331 4.39306C24.105 3.82109 25.0337 3.82109 25.6064 4.39306C26.179 4.96569 26.179 5.89438 25.6064 6.46635L23.9476 8.12512C23.3756 8.69775 22.4476 8.69775 21.8743 8.12512Z"
                            class="themeable fill-black dark:fill-white"/>
                        <path
                            d="M8.12515 21.8756C7.55252 21.3023 6.62449 21.3023 6.05186 21.8756L4.39309 23.5337C3.82112 24.1056 3.82046 25.035 4.39309 25.607C4.96572 26.1789 5.89442 26.1789 6.46639 25.607L8.12515 23.9475C8.69779 23.3756 8.69779 22.4469 8.12515 21.8756Z"
                            class="themeable fill-black dark:fill-white"/>
                        <path
                            d="M24.7222 15C24.7222 14.1902 25.3785 13.5339 26.1883 13.5339H28.5339C29.3437 13.5339 30.0001 14.1902 30.0001 15C30.0001 15.8098 29.3437 16.4655 28.5339 16.4655H26.1883C25.3785 16.4655 24.7222 15.8098 24.7222 15Z"
                            class="themeable fill-black dark:fill-white"/>
                        <path
                            d="M5.27724 15C5.27724 14.1902 4.6209 13.5339 3.81112 13.5339H1.46612C0.656333 13.5339 0 14.1902 0 15C0 15.8098 0.656333 16.4655 1.46612 16.4655H3.81178C4.6209 16.4655 5.27724 15.8098 5.27724 15Z"
                            class="themeable fill-black dark:fill-white"/>
                        <path
                            d="M21.8743 21.8756C22.4469 21.3036 23.3756 21.3036 23.9476 21.8756L25.6064 23.5343C26.179 24.1056 26.179 25.035 25.6064 25.607C25.0337 26.1789 24.1057 26.1789 23.5331 25.607L21.8743 23.9482C21.3017 23.3756 21.3017 22.4475 21.8743 21.8756Z"
                            class="themeable fill-black dark:fill-white"/>
                        <path
                            d="M8.12516 8.12511C8.69779 7.55248 8.69779 6.62444 8.12516 6.05181L6.46639 4.39371C5.89376 3.82108 4.96573 3.82108 4.3931 4.39371C3.82047 4.96567 3.82047 5.89437 4.3931 6.46634L6.05186 8.12511C6.6245 8.6984 7.55253 8.6984 8.12516 8.12511Z"
                            class="themeable fill-black dark:fill-white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_24_83">
                            <rect width="30" height="30" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

                <p class="themeable font-normal text-xl dark:text-white">
                    {{ weather.radiationAmount }} MJ/m<sup>2</sup>
                </p>
            </li>
        </ul>
    </li>
</template>

<script lang="ts" setup>
    import { ref, type PropType } from 'vue';
    import { type DailyWeather, Condition } from '@/scripts/types'


    const { weather } = defineProps({
        weather: {
            type: Object as PropType<DailyWeather>,
            required: true
        }
    })
    const condition = ref<Condition>()

    Condition.ALL_CONDITIONS.forEach(conditionType => {
        if(conditionType.codes.includes(weather.weatherCode)) {
            condition.value = conditionType
        }
    })
</script>

<style scoped>
    .weather-card {
        @apply transition-all duration-500 py-8 px-10 bg-gray-50 rounded-3xl dark:bg-dark-gray pointer-events-none;
        background-image: url('@/assets/images/weather-card-light.svg');
        background-size: 1000px 1000px;
        background-position: center;

    }

    .weather-card:hover {
        background-size: 1200px 1200px !important;
    }
</style>