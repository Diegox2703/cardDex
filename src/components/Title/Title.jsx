import style from './Title.module.css'

export default function Title({ children, fontFamily = 'primary_font_family', size = 'large', variant = 'primary' }) {
  return (
    <h1 className={`${style.title} ${style[fontFamily]} ${style[size]} ${style[variant]}`}>{children}</h1>
  )
}
