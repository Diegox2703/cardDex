import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Title from '../Title/Title'
import Text from '../Text/Text'
import { faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons'
import styles from './Price.module.css'

export default function Price({ priceTier, price }) {
  return (
    <article className={styles.price_container}>
        <section className={styles.price_tier}>
            <Title fontFamily='tertiary_font_family' size='small' variant='text_color'>
                { priceTier }
            </Title>
            <FontAwesomeIcon icon={faMoneyBill1Wave} className={styles.moneybill_icon}/>
        </section>
        <section className={styles.price}>
            <Text variant='secondary' fontFamily='tertiary_font_family' size='large'>
                { price ? `$${price}` : 'No price found' }
            </Text>
        </section>
    </article>
  )
}
