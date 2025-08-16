import { Link } from 'react-router-dom'
import React from 'react'
import style from './Card.module.css'

function Card({ cardImg, id, standalone }) {
  return (
    <article className={`${style.card_container} ${standalone ? style.standalone : ''}`}>
        <Link to={`/card/${id}`}>
            <img className={style.card_img} src={cardImg} alt="card_img"/>
        </Link>
    </article>
  )
}

export default React.memo(Card)
