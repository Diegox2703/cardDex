import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './NavIconButton.module.css'

export default function NavIconButton({ url, icon, variant = 'primary' }) {
  return (
    <a href={url} target='_blank' rel="noopener noreferrer" className={`${styles.nav_icon_button} ${styles[variant]}`}>
        <FontAwesomeIcon icon={icon}/>
    </a>
  )
}
