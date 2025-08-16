import Card from '../Card/Card'
import styles from './CardsContainer.module.css'

export default function CardsContainer({ cardsData }) {
  return (
    <div className={styles.cards_container}>
      {
        cardsData?.pages.map(page => (
          page.data.map(card => (
            <Card key={card.id} cardImg={card.image} id={card.id}/>
          ))
        ))
      }
    </div>
  )
}
