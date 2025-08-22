import { useEffect, useRef, useState } from "react"

export const useLazyImageLoading = () => {
    const imageRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]

            if (entry.isIntersecting) {
                setIsVisible(true)
                observer.disconnect()
            }
        }, { threshold: 0.1 })

        if (imageRef.current) observer.observe(imageRef.current)
        
        return () => observer.disconnect()
    }, [])

    const handleLoad = () => setIsLoaded(true)

    const handleError = () => setIsError(true)

    return { imageRef, isVisible, isLoaded, isError, handleLoad, handleError }
}