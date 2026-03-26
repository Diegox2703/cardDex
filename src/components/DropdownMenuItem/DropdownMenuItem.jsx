import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './DropdownMenuItem.module.css'

export default function DropdownMenuItem({ label, isActive, icon, ...props }) {
  return (
    <li className={`${style.item} ${isActive ? style.active : ''}`} {...props}>
        <FontAwesomeIcon icon={icon}/>
        { label }
    </li>
  )
}
