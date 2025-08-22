import Title from '../../components/Title/Title'
import Text from '../../components/Text/Text'
import Tag from '../../components/Tag/Tag'
import Set from '../../components/Set/Set'
import Finish from '../Finish/Finish'
import Price from '../Price/Price'
import cardMarketLogo from '../../assets/images/cardmarket_logo.webp'
import tcgPlayerLogo from '../../assets/images/tcgplayer_logo.webp'
import LazyImage from '../LazyImage/LazyImage'
import style from './CardDetails.module.css'

export default function CardDetails({ openImageViewerFn, cardData }) {
  return (
    <div className={style.card_details_container}>
      <section className={style.card_img_section}>
        <div className={style.card_img_wrapper}>
            <LazyImage 
                src={cardData?.image} 
                alt={'card_img'} 
                onClick={() => openImageViewerFn(cardData?.image)}
            />
        </div>
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
                cardData?.types &&
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
        {
            cardData?.tcgplayer?.prices
            &&
            <section className={style.tcgplayer_section}>
                <div className={style.updatedAt}>
                    <div className={style.tcgplayer_title}>
                        <Title fontFamily='tertiary_font_family' size='normal' variant='text_color'>Tcgplayer</Title>
                        <img src={tcgPlayerLogo} alt="tcgplayer_logo" className={style.tcgplayer_logo}/>
                    </div>
                    <Text fontFamily='tertiary_font_family' variant='tertiary'>Last updated { cardData?.tcgplayer?.updatedAt }</Text>
                </div>
                <div className={style.finishes_container}>
                    {
                        cardData?.tcgplayer?.finishes.map(finish => (
                            <Finish key={crypto.randomUUID()} finishName={finish} finishPrices={cardData?.tcgplayer?.prices[finish]}/>
                        ))
                    }
                </div>
            </section>
        }
        {
            cardData?.cardmarket?.updatedAt
            &&
            <section className={style.cardmarket_section}>
                <div className={style.updatedAt}>
                    <div className={style.cardmarket_title}>
                        <Title fontFamily='tertiary_font_family' size='normal' variant='text_color'>Cardmarket</Title>
                        <img src={cardMarketLogo} alt="cardmarket_logo" className={style.cardmarket_logo}/>
                    </div>
                    <Text fontFamily='tertiary_font_family' variant='tertiary'>Last updated { cardData?.cardmarket?.updatedAt }</Text>
                </div>
                <div className={style.prices}>
                    <Price priceTier={'Average sell price'} price={cardData?.cardmarket.prices.averageSellPrice}/>
                    <Price priceTier={'Low price'} price={cardData?.cardmarket.prices.lowPrice}/>
                    <Price priceTier={'Trend price'} price={cardData?.cardmarket.prices.trendPrice}/>
                    <Price priceTier={'Reverse holotrend'} price={cardData?.cardmarket.prices.reverseHoloTrend}/>
                    <Price priceTier={'Suggested price'} price={cardData?.cardmarket.prices.suggestedPrice}/>
                </div>
            </section>
        }
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
