import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export const useScrollUp = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo({ behavior: 'instant', top: 0 })
    }, [pathname])
}