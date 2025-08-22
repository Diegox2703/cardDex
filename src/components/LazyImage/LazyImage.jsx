import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLazyImageLoading } from '../../hooks/useLazyImageLoading'
import { faSadTear } from '@fortawesome/free-solid-svg-icons'
import Title from '../Title/Title'
import styles from './LazyImage.module.css'

export default function LazyImage({ src, alt, objectFit = 'fill', width, height, ...props }) {
  const { imageRef, isVisible, isLoaded, isError, handleError, handleLoad } = useLazyImageLoading() 

  return (
    <div 
        className={`${styles.image_wrapper} ${isLoaded ? styles.loaded : ''}`}
        style={{ width, height }}
    >
        {
            !isLoaded && isVisible && !isError &&
            <div className={styles.skeleton}></div>
        }
        {
            isError &&
            <div className={styles.image_error}>
                <FontAwesomeIcon icon={faSadTear} className={styles.image_error_icon}/>
                <Title size='small'>Error loading image</Title>
            </div>
        }
        <img
            ref={imageRef}
            src={ isVisible ? src : undefined }
            alt={isLoaded ? alt : ''}
            onLoad={handleLoad}
            onError={handleError}
            className={`${styles.lazy_image} ${styles[objectFit]} ${isLoaded ? styles.loaded : ''}`}
            {...props}
        />
    </div>
  )
}
