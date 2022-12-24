import { ref, type Ref } from 'vue';

export function useSlider(slideCount : Ref<number>, initialSlideNumber = Math.floor(slideCount.value / 2)) {
    const currentSlideNumber = ref(initialSlideNumber)

    function goToNextSlide() {
        if(currentSlideNumber.value < slideCount.value) {
            currentSlideNumber.value++
        }
    }

    function goToPreviousSlide() {
        if(currentSlideNumber.value > 1) {
            currentSlideNumber.value--
        }
    }

    return { currentSlideNumber, goToNextSlide, goToPreviousSlide }
}