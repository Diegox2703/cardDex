import style from './PageLayout.module.css'

export default function PageLayout({ children }) {
  return (
    <div className={style.page_layout}>
      {children}
    </div>
  )
}
