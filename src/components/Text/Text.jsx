import style from './Text.module.css'

export default function Text({ children, fontFamily = 'primary_font_family', variant = 'primary', size = 'normal' }) {
  return (
    <p className={`${style.text} ${style[fontFamily]} ${style[variant]} ${style[size]}`}>
      {children}
    </p>
  )
}
