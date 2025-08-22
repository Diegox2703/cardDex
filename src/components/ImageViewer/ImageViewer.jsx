import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { useDisableScroll } from '../../hooks/useDisableScroll'
import LazyImage from '../LazyImage/LazyImage'
import style from './ImageViewer.module.css'

export default function ImageViewer({ closeImageViewerFn, image }) {
  useDisableScroll()

  return (
    <div className={style.modal_overlay} onClick={closeImageViewerFn}>
        <button className={style.close_btn} onClick={closeImageViewerFn}>
            <FontAwesomeIcon icon={faClose}/>
        </button>
        <div className={style.card_image_wrapper}>
          <LazyImage src={image} alt="card_img" onClick={(e) => e.stopPropagation()} objectFit='contain'/>
        </div>
    </div>
  )
}
