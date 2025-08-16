import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import NavBar from '../../components/NavBar/NavBar'
import NavIconButton from '../../components/NavIconButton/NavIconButton'
import styles from './SideMenu.module.css'
import Button from '../../components/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { useDisableScroll } from '../../hooks/useDisableScroll'
import useSideMenuStore from '../../store/useSideMenuStore'

export default function SideMenu() {
  const toggleSideMenu = useSideMenuStore((state) => state.toggleSideMenu)
  useDisableScroll()

  return (
    <aside className={styles.side_menu_container}>
        <div className={styles.side_menu_header}>
          <Button size='small' onClickFn={toggleSideMenu}>
            <FontAwesomeIcon icon={faClose}/>
          </Button>
        </div>
        <NavBar location='side_menu'/>
        <div className={styles.side_menu_footer}>
          <NavIconButton icon={faLinkedinIn} variant='secondary'/>
          <NavIconButton icon={faGithub} variant='secondary'/>
        </div>
    </aside>
  )
}
