import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { useDisableScroll } from '../../hooks/useDisableScroll'
import LazyImage from '../LazyImage/LazyImage'
import { motion } from 'motion/react'
import style from './ImageViewer.module.css'

export default function ImageViewer({ closeImageViewerFn, image }) {
  useDisableScroll()

  return (
    <motion.div 
      className={style.modal_overlay} onClick={closeImageViewerFn}
      initial={{ backdropFilter: 'blur(0px)', opacity: 0 }}
      animate={{ backdropFilter: 'blur(5px)', opacity: 1 }}
      exit={{ backdropFilter: 'blur(0px)', opacity: 0 }}
    >
        <button className={style.close_btn} onClick={closeImageViewerFn}>
            <FontAwesomeIcon icon={faClose}/>
        </button>
        <motion.div layoutId='card' className={style.card_image_wrapper}>
          <LazyImage src={image} alt="card_img" onClick={(e) => e.stopPropagation()} objectFit='contain'/>
        </motion.div>
    </motion.div>
  )
}
