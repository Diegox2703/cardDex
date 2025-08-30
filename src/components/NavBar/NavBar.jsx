import { NavLink } from 'react-router-dom'
import useSideMenuStore from '../../store/useSideMenuStore'
import { motion } from 'motion/react'
import { slideInRight, staggerContainer } from '../../animations/common'
import { useMediaQuery } from 'react-responsive'
import styles from './NavBar.module.css'

export default function NavBar() {
  const toggleSideMenu = useSideMenuStore((state) => state.toggleSideMenu)
  const isDesktop = useMediaQuery({ minWidth: 630 })
  const handleClassName = ({isActive}) => {
    return `${styles.nav_link} ${isActive ? styles.active : ''}`
  }

  return (
    <nav className={`${styles.nav}`}>
      <motion.ul 
        className={`${styles.nav_list} ${!isDesktop ? styles.side_menu : ''}`}
        variants={staggerContainer}
        initial='start'
        animate='end'
      >
        <motion.li 
          className={styles.nav_item} onClick={ !isDesktop ? toggleSideMenu : undefined }
          variants={slideInRight}
        >
          <NavLink className={handleClassName} to={'/'}>Home</NavLink>
        </motion.li>
        <motion.li 
          className={styles.nav_item} onClick={ !isDesktop ? toggleSideMenu : undefined }
          variants={slideInRight}
        >
          <NavLink className={handleClassName} to={'/cards'}>Cards</NavLink>
        </motion.li>
        <motion.li 
          className={styles.nav_item} onClick={ !isDesktop ? toggleSideMenu : undefined }
          variants={slideInRight}
        >
          <NavLink className={handleClassName} to={'/sets'}>Sets</NavLink>
        </motion.li>
      </motion.ul>
    </nav>
  )
}
