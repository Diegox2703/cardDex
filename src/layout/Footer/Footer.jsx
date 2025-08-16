import WebSiteLogo from '../../components/WebsiteLogo/WebsiteLogo'
import NavIconButton from '../../components/NavIconButton/NavIconButton'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <WebSiteLogo variant='secondary' direction='column'/>
      <div className={styles.buttons_container}>
        <NavIconButton icon={faLinkedin} url={'https://www.linkedin.com/in/diego-sarmiento-290401359/'}/>
        <NavIconButton icon={faGithub} url={'https://github.com/Diegox2703'}/>
      </div>
    </footer>
  )
}
