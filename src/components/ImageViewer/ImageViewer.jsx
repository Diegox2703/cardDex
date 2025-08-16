import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { useDisableScroll } from '../../hooks/useDisableScroll'
import style from './ImageViewer.module.css'

export default function ImageViewer({ closeImageViewerFn, image }) {
  useDisableScroll()

  return (
    <div className={style.modal_overlay} onClick={closeImageViewerFn}>
        <button className={style.close_btn} onClick={closeImageViewerFn}>
            <FontAwesomeIcon icon={faClose}/>
        </button>
        <div className={style.modal_body}>
            <img src={image} alt="card_img" className={style.card_img} onClick={(e) => e.stopPropagation()}/>
        </div>
    </div>
  )
}
