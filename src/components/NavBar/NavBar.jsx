import { NavLink } from 'react-router-dom'
import useSideMenuStore from '../../store/useSideMenuStore'
import styles from './NavBar.module.css'

export default function NavBar({ location = 'header' }) {
  const toggleSideMenu = useSideMenuStore((state) => state.toggleSideMenu)
  const handleClassName = ({isActive}) => {
    return `${styles.nav_link} ${isActive ? styles.active : ''}`
  }

  return (
    <nav className={`${styles.nav} ${styles[location]}`}>
      <ul className={`${styles.nav_list} ${styles[location]}`}>
        <li className={styles.nav_item} onClick={ location === 'side_menu' ? toggleSideMenu : undefined }>
            <NavLink className={handleClassName} to={'/'}>Home</NavLink>
        </li>
        <li className={styles.nav_item} onClick={ location === 'side_menu' ? toggleSideMenu : undefined }>
            <NavLink className={handleClassName} to={'/cards'}>Cards</NavLink>
        </li>
        <li className={styles.nav_item} onClick={ location === 'side_menu' ? toggleSideMenu : undefined }>
            <NavLink className={handleClassName} to={'/sets'}>Sets</NavLink>
        </li>
      </ul>
    </nav>
  )
}
