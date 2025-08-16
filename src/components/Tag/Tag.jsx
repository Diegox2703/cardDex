import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import style from './Tag.module.css'

export default function Tag({ children, size = 'normal', variant = 'primary', deleteBtn, deleteBtnFn }) {
  return (
    <span className={`${style.tag} ${style[size]} ${style[variant]}`}>
      { children } 
      {
        deleteBtn &&
        <button className={style.close_btn} onClick={deleteBtnFn}>
          <FontAwesomeIcon icon={faClose}/>
        </button>
      }
    </span>
  )
}
