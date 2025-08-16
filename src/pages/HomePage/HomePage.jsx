import Banner from '../../components/Banner/Banner'
import InfoCard from '../../components/InfoCard/InfoCard'
import cardsImage from '../../assets/images/cards-img.webp'
import setsImage from '../../assets/images/sets-img.webp'
import styles from './HomePage.module.css'

export default function HomePage() {
  return (
    <div className={styles.home_page}>
      <Banner/>
      <InfoCard
        title={'Your Pokemon card encyclopedia'}
        description={'Access a complete database of cards from every generation, from classic to the most recent. Check up-to-date prices, discover their rarity, type, health points, and view high-quality images. Stay up to date with the most sought-after editions for TCG collectors and players.'}
        image={cardsImage}
        url={'/cards'}
        buttonText={'Explore Cards'}
      />
      <InfoCard
        title={'Explore all Pokémon TCG sets'}
        description={'Discover every Pokémon set, from early releases to the latest collections. See the complete list of cards and release dates. A detailed, visual guide to understanding and organizing your sets like a seasoned collector.'}
        image={setsImage}
        url={'/sets'}
        buttonText={'Explore Sets'}
        direction='reverse'
        variant='secondary'
      />
    </div>
  )
}
