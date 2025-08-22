import Title from '../Title/Title'
import Text from '../Text/Text'
import Tag from '../Tag/Tag'
import LazyImage from '../LazyImage/LazyImage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link } from 'react-router-dom'
import style from './Set.module.css'

function Set({ logo, symbol, releaseDate, name, series, printedTotal, total, id }) {
  return (
    <article className={`${style.set_container}`}>
        <Link to={`/cards?set=${id}`}>
          <section className={style.set_img_section}>
              <LazyImage alt={'set_img'} src={logo} objectFit='contain'/>
              <div className={style.set_symbol_container}>
                <LazyImage alt={'set_symbol'} src={symbol} width={50} height={50} objectFit='contain'/>
              </div>
              <button className={style.time_button}>
                  <FontAwesomeIcon icon={faClock} className={style.time_icon}/>
                  <span className={style.date}>{releaseDate}</span>
              </button>
          </section>
          <section className={style.set_info_section}>
              <Title size='normal' fontFamily='secondary_font_family' variant='text_color'>{name}</Title>
              <Text fontFamily='secondary_font_family' variant='tertiary'>{series}</Text>
              <Tag>{`${printedTotal}/${total}`}</Tag>
          </section>
        </Link>
    </article>
  )
}

export default React.memo(Set)