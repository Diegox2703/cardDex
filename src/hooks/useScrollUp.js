import { useEffect, useState } from "react"

export const useScrollUp = (scrollAmount = 1000) => {
    const [btnVisible, setBtnVisible] = useState(false)

    const scrollUp = () => window.scrollTo({ behavior: "smooth", top: 0 })

    function setBtnVisibility(){
        const scrollPosition = window.scrollY
    
        if (scrollPosition >= scrollAmount) return setBtnVisible(true)
        setBtnVisible(false)
    } 

    useEffect(() => {
        window.addEventListener('scroll', setBtnVisibility)

        return () => window.removeEventListener('scroll', setBtnVisibility)
    }, [])

    return { btnVisible, scrollUp }
}