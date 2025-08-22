import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../Button/Button'
import Text from '../Text/Text'
import Title from '../Title/Title'
import LazyImage from '../LazyImage/LazyImage'
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'
import styles from './InfoCard.module.css'

export default function InfoCard({ 
    variant = 'primary', 
    direction = 'row',
    title,
    description,
    image,
    url,
    buttonText 
}) {
  return (
    <section className={`${styles.infocard_section} ${styles[variant]} ${styles[direction]}`}>
      <section className={styles.info_section}>
        <Title variant={ variant === 'primary' ? 'text_color_variant' : 'primary' }>
            { title }
        </Title>
        <Text 
            variant={ variant === 'primary' ? 'text_color_variant' : 'tertiary' } 
            fontFamily='secondary_font_family'
        >
            { description }
        </Text>
        <Button variant={ variant === 'primary' ? 'secondary' : 'primary' } type='link' redirectTo={url}>
            { buttonText }
            <FontAwesomeIcon icon={faSquareArrowUpRight}/>
        </Button>
      </section>
      <section className={styles.infocard_image_section}>
        <div className={styles.infocard_image_wrapper}>
          <LazyImage src={ image } alt="infocard-image" objectFit='contain'/>
        </div>
      </section>
    </section>
  )
}
