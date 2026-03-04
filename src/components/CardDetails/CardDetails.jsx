import Title from '../../components/Title/Title'
import Text from '../../components/Text/Text'
import Tag from '../../components/Tag/Tag'
import Set from '../../components/Set/Set'
import LazyImage from '../LazyImage/LazyImage'
import { motion } from 'motion/react'
import style from './CardDetails.module.css'

export default function CardDetails({ openImageViewerFn, cardData }) {
  return (
    <div className={style.card_details_container}>
      <section className={style.card_img_section}>
        <motion.div 
            layoutId='card' 
            className={style.card_img_wrapper}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2, ease: 'easeIn' }}
        >
            <LazyImage 
                src={cardData?.image} 
                alt={'card_img'} 
                onClick={() => openImageViewerFn(cardData?.image)}
            />
        </motion.div>
      </section>
      <section className={style.card_details_section}>
        <section className={style.pokemon_name_section}>
            <div className={style.pokemon_name}>
                <Title fontFamily='tertiary_font_family' variant='text_color'>{ cardData?.name }</Title>
                {
                    cardData?.hp &&
                    <Tag>HP { cardData?.hp }</Tag>
                }
            </div>
            <div className={style.pokemon_supertype}>
                <Text fontFamily='tertiary_font_family' variant='tertiary'>{ cardData?.supertype }</Text>
            </div>
        </section>
        <section className={style.pokemon_info_section}>
            {
                cardData.types.length !== 0 &&
                <div className={style.pokemon_info}>
                    <Title fontFamily='tertiary_font_family' size='small' variant='text_color'>Types</Title>
                    <Text fontFamily='tertiary_font_family' variant='tertiary'>{ cardData?.types }</Text>
                </div>
            }
            {
                cardData?.evolvesFrom &&
                <div className={style.pokemon_info}>
                    <Title fontFamily='tertiary_font_family' size='small' variant='text_color'>Evolves From</Title>
                    <Text fontFamily='tertiary_font_family' variant='tertiary'>{ cardData?.evolvesFrom }</Text>
                </div>
            }
            <div className={style.pokemon_info}>
                <Title fontFamily='tertiary_font_family' size='small' variant='text_color'>Number</Title>
                <Text fontFamily='tertiary_font_family' variant='tertiary'>{ cardData?.number }</Text>
            </div>
            <div className={style.pokemon_info}>
                <Title fontFamily='tertiary_font_family' size='small' variant='text_color'>Artist</Title>
                <Text fontFamily='tertiary_font_family' variant='tertiary'>{ cardData?.artist }</Text>
            </div>
            {
                cardData?.rarity &&
                <div className={style.pokemon_info}>
                    <Title fontFamily='tertiary_font_family' size='small' variant='text_color'>Rarity</Title>
                    <Text fontFamily='tertiary_font_family' variant='tertiary'>{ cardData?.rarity }</Text>
                </div>
            }
        </section>
        <section className={style.set_section}>
            <Title fontFamily='tertiary_font_family' size='normal' variant='text_color'>Set</Title>
            <Set
                id={ cardData?.set.id }
                logo={ cardData?.set.logo }
                symbol={ cardData?.set.symbol }
                name={ cardData?.set.name }
                series={ cardData?.set.series }
                printedTotal={ cardData?.set.printedTotal }
                total={ cardData?.set.total }
                releaseDate={ cardData?.set.releaseDate }
                borderStyle='normal_border'
            />
        </section>
      </section>
    </div>
  )
}
