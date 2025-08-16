import { Link } from 'react-router-dom'
import logo from '../../assets/images/pokeball-icon.webp'
import styles from './Logo.module.css'

export default function WebsiteLogo({variant = 'primary', direction = 'row'}) {
  return (
    <Link to={'/'} className={`${styles.container} ${styles[direction]}`}>
        <img src={logo} alt="logo-img" className={styles.logo_img}/>
        <h1 className={`${styles.website_name} ${styles[variant]}`}>CardDex</h1>
    </Link>
  )
}
