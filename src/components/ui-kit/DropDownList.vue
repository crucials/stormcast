<template>
    <p class="themeable list-title">
        {{ listTitle }}
        <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.353553" y1="1.48952" x2="7.42462" y2="8.56059" class="themeable arrow-part"/>
            <line x1="7.40188" y1="7.80338" x2="14.4729" y2="0.732308" class="themeable arrow-part"/>
        </svg>

        <div class="drop-down-list">
            <a class="themeable drop-down-item" v-for="item in items" :key="items.indexOf(item)"
                :href="item.link" :class="{ 'hover:underline': item.link != undefined }">
                {{ item.name }}
            </a>
        </div>
    </p>
</template>

<script lang="ts" setup>
    import type { DropDownItem } from '@/scripts/types'
    import type { PropType } from 'vue'

    defineProps({
        items: {
            type: Array as PropType<DropDownItem[]>,
            required: true
        },

        listTitle: {
            type: String as PropType<string>,
            required: true
        }
    })
</script>

<style scoped>
    .arrow-part {
        @apply stroke-black dark:stroke-white;
    }

    .list-title {
        @apply relative cursor-default flex items-center gap-x-2 font-normal text-lg dark:text-white z-20 3xl:text-2xl
    }

    .list-title:hover .drop-down-list {
        @apply opacity-100 translate-y-0 pointer-events-auto;
    }

    .list-title:hover .drop-down-item {
        animation-name: pointer-events-delay;
        animation-fill-mode: both;
        animation-duration: 0.5s;
    }

    @keyframes pointer-events-delay {
        100% {
            pointer-events: auto;
        }
    }

    .drop-down-list {
        @apply transition-all duration-300 absolute w-full top-full left-0 px-2.5 py-3.5 border-[1px] 
            border-t-0 border-main/50 rounded-b-lg bg-white/40 backdrop-blur-[7px] dark:bg-black/40
            opacity-0 -translate-y-5 pointer-events-none;
    }

    .drop-down-item {
        @apply block font-light text-base text-black mb-2.5 text-left last:mb-0 dark:text-white 3xl:text-xl
            pointer-events-none;
    }
</style>