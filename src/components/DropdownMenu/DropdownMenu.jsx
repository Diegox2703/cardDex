import style from './DropdownMenu.module.css'
import { motion } from 'motion/react'

export default function DropdownMenu({ children }) {
  return (
    <motion.div 
      className={style.dropdownmenu}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ul>
        {children}
      </ul>
    </motion.div>
  )
}
