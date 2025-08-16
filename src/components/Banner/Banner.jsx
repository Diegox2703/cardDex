import Text from '../Text/Text'
import Title from '../Title/Title'
import Button from '../Button/Button'
import pokemonBanner from '../../assets/gifs/pokemon-banner.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'
import styles from './Banner.module.css'

export default function Banner() {
  return (
    <section className={styles.banner_section}>
      <section className={styles.banner_description_section}>
        <div className={styles.description}>
            <Text variant='tertiary' fontFamily='tertiary_font_family'>Pokemon Card App</Text>
            <Title>All Pokemon cards, in one place</Title>
            <Text variant='text_color_variant' fontFamily='secondary_font_family'>Explore cards from all generations, check up-to-date prices, and find every set in seconds, here you'll find the information you need to understand, organize, and evaluate your collection.</Text>
        </div>
        <div className={styles.api_used_container}>
            <Button type='link' redirectTo={'https://pokemontcg.io/'}>
                API used here
                <FontAwesomeIcon icon={faSquareArrowUpRight}/>
            </Button>
        </div>
      </section>
      <section className={styles.banner_image_section}>
        <img src={pokemonBanner} alt="banner-img" className={styles.banner_image}/>
      </section>
    </section>
  )
}
