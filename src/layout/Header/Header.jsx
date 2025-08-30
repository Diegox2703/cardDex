import NavBar from '../../components/NavBar/NavBar'
import WebsiteLogo from '../../components/WebsiteLogo/WebsiteLogo'
import Button from '../../components/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import useSideMenuStore from '../../store/useSideMenuStore'
import { useLocation } from 'react-router-dom'
import styles from './Header.module.css'
import { useMediaQuery } from 'react-responsive'

export default function Header() {
  const { pathname } = useLocation()
  const isDesktop = useMediaQuery({ minWidth: 630 })
  const toggleSideMenu = useSideMenuStore((state) => state.toggleSideMenu)

  return (
    <header className={`${styles.header} ${ pathname === '/' ? styles.dark : '' }`}>
      <div className={styles.header_content}>
        <WebsiteLogo variant={ pathname === '/' ? 'secondary' : 'primary' }/>
        { isDesktop && <NavBar/> }
        { 
          !isDesktop &&
          <div className={styles.burger_btn}>
            <Button size='small' onClickFn={toggleSideMenu}>
              <FontAwesomeIcon icon={faBars}/>
            </Button>
          </div>
        }
      </div>
    </header>
  )
}
