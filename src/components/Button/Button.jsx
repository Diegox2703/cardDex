import { Link } from 'react-router-dom'
import style from './Button.module.css'

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'normal', 
  type = 'action', 
  redirectTo, 
  onClickFn,
  floatingBtn
}) {
  return (
    <>
      {
        type === 'action' &&
        <button 
          className={
            `${style.btn} ${style[variant]} ${style[size]} ${floatingBtn ? style.float : ''}`
          } 
          onClick={onClickFn}
        >
            { children }
        </button>
      }
      {
        type === 'link' &&
        <Link 
          className={
            `${style.btn} ${style[variant]} ${style[size]} ${floatingBtn ? style.float : ''}`
          } 
          to={redirectTo}
        >
          { children }
        </Link>
      }
    </>
  )
}
