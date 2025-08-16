import { create } from 'zustand'

const useSideMenuStore = create((set) => ({
    isOpen: false,
    toggleSideMenu: () => set((state) => ({ isOpen: !state.isOpen }))
}))

export default useSideMenuStore