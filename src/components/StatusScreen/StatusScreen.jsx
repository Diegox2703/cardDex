import Title from '../Title/Title'
import Text from '../Text/Text'
import pikachuRunning from '../../assets/gifs/pikachu-running.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button/Button'
import style from './StatusScreen.module.css'

export default function StatusScreen({ 
  size = 'normal', 
  statusImage = pikachuRunning, 
  statusTitle = 'Status title', 
  statusText = 'Status title',
  refetchFn,
  modalMode
}) {
  return (
    <div className={`${style.status_screen_container} ${style[size]} ${style[modalMode]}`}>
      <img src={statusImage} alt="status-img" className={`${style.status_img} ${style[size]}`}/>
      <Title size={size}>{ statusTitle }</Title>
      <Text 
        fontFamily='tertiary_font_family' 
        variant={ modalMode === 'full_width_overlay' ? 'text_color_variant' : 'tertiary' }
      >
        { statusText }
      </Text>
      { 
        refetchFn && 
        <Button size={size} onClickFn={refetchFn}>
            <FontAwesomeIcon icon={faRotateRight}/>
            Retry
        </Button> 
      }
    </div>
  )
}
