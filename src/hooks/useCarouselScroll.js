import { useRef } from "react"

export const useCarouselScroll = (scrollAmount = 200) => {
    const carouselRef = useRef(null)

    const scrollLeft = () => {
        carouselRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
    }

    const scrollRight = () => {
        carouselRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }

    return { carouselRef, scrollLeft, scrollRight }
}