import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useSearch } from '../../hooks/useSearch'
import styles from './SearchBar.module.css'

export default function SearchBar({ placeholder, queryParam, type = 'text', size = 'normal', icon = faSearch }) {
  const { setSearch, search } = useSearch(queryParam)

  return (
    <div className={`${styles.searchbar_container} ${styles[size]}`}>
      <FontAwesomeIcon icon={icon} className={styles.search_icon}/>
      <input 
        type={type} 
        placeholder={placeholder} 
        className={styles.searchbar} 
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </div>
  )
}