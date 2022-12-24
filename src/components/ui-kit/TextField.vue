<template>
    <input :type="fieldType" :value="modelValue" @input="queryModelUpdate" :placeholder="placeholder"
        class="themeable px-5 py-2.5 font-light text-base text-black placeholder:text-gray-400 bg-gray-100 rounded-xl
        focus:outline-none dark:bg-neutral-800 dark:text-white dark:placeholder:text-gray-500 min-w-2.5
        3xl:text-xl"/>
</template>

<script lang="ts" setup>
    import type { PropType } from 'vue'

    defineProps({
        fieldType: {
            type: String as PropType<'text' | 'number' | 'email'>,
            default: 'text'
        },

        placeholder: {
            type: String as PropType<string>
        },

        modelValue: {
            type: String as PropType<string>,
            required: true
        },
    })

    const emit = defineEmits<{
        (event : 'update:modelValue', value : string) : void
    }>()
    const queryModelUpdate = (event : Event) => {
        emit('update:modelValue', (event.target as HTMLInputElement).value)
    }
</script>

<style scoped>

</style>