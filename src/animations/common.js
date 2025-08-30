export const slideInRight = {
    start: { opacity: 0, x: 100 },
    end: { opacity: 1, x: 0 }
}

export const staggerContainer = {
    start: {},
    end: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1   
        }
    }
}

