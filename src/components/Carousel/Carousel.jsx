import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../Button/Button'
import Title from '../Title/Title'
import Card from '../Card/Card'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight'
import { useCarouselScroll } from '../../hooks/useCarouselScroll'
import { useGetCardsByName } from '../../hooks/useCards'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import ErrorScreen from '../ErrorScreen/ErrorScreen'
import charmanderDancing from '../../assets/gifs/charmander-dancing.webp'
import style from './Carousel.module.css'

export default function Carousel({ cardName }) {
  const { carouselRef, scrollLeft, scrollRight } = useCarouselScroll(400)
  const { data, isLoading, isError, refetch } = useGetCardsByName(cardName)

  if (isLoading) return <LoadingScreen size='small' loadingImage={charmanderDancing}/>

  if (isError) return <ErrorScreen size='small' refetchFn={refetch}/>

  return (
    <div className={style.carousel_container}>
        <section className={style.carousel_title_section}>
            <Title fontFamily='tertiary_font_family' variant='text_color'>Mas cartas de "{ cardName }"</Title>
            <div className={style.carousel_btns}>
                {
                    data?.totalCount > 12 &&
                    <Button type='link' redirectTo={`/cards?cardName=${cardName}`}>
                        More
                    </Button>
                }
                <Button onClickFn={scrollLeft}>
                    <FontAwesomeIcon icon={faAngleLeft}/>
                </Button>
                <Button onClickFn={scrollRight}>
                    <FontAwesomeIcon icon={faAngleRight}/>
                </Button>
            </div>
        </section>
        <section className={style.carousel_section} ref={carouselRef}>
            <div className={style.carousel}>
                {
                    data?.data.map(card => (
                        <Card
                            key={card.id}
                            cardImg={card.image}
                            standalone
                            id={card.id}
                        />
                    ))
                }
            </div>
        </section>
        {
            data?.totalCount > 12 &&
            <section className={style.more_cards_btn_section}>
                <Button type='link' redirectTo={`/cards?cardName=${cardName}`}>
                    More
                </Button>
            </section>
        }
    </div>
  )
}
