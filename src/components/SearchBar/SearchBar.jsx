import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styles from './SearchBar.module.css'

export default function SearchBar({ placeholder, onChangeFn, type = 'text', size = 'normal', icon = faSearch }) {
  return (
    <div className={`${styles.searchbar_container} ${styles[size]}`}>
      <FontAwesomeIcon icon={icon} className={styles.search_icon}/>
      <input type={type} placeholder={placeholder} className={styles.searchbar} onChange={(e) => onChangeFn(e.target.value)}/>
    </div>
  )
}