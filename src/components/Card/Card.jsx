import { Link } from 'react-router-dom'
import React from 'react'
import LazyImage from '../LazyImage/LazyImage'
import style from './Card.module.css'

function Card({ cardImg, id, standalone }) {
  return (
    <article className={`${style.card_container} ${standalone ? style.standalone : ''}`}>
        <Link to={`/card/${id}`} className={style.card_link}>
            <LazyImage alt={'card_image'} src={cardImg}/>
        </Link>
    </article>
  )
}

export default React.memo(Card)
