import { useState } from "react"

export const useImageViewer = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [image, setImage] = useState(null)

    function openImageViewer(cardImage) {
        setIsOpen(true)
        setImage(cardImage)
    }

    function closeImageViewer() {
        setIsOpen(false)
    }

    return { isOpen, image, openImageViewer, closeImageViewer }
}