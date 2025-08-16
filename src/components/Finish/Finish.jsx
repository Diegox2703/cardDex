import Price from '../Price/Price'
import Tag from '../Tag/Tag'
import style from './Finish.module.css'

export default function Finish({ finishName, finishPrices }) {
  return (
    <div className={style.finish_container}>
        <div className={style.prices}>
            <Price priceTier={'Low'} price={finishPrices.low}/>
            <Price priceTier={'Mid'} price={finishPrices.mid}/>
            <Price priceTier={'High'} price={finishPrices.high}/>
            <Price priceTier={'Market'} price={finishPrices.market}/>
            <Price priceTier={'Direct Low'} price={finishPrices.directLow}/>
        </div>
        <div className={style.finish}>
            <Tag size='large' variant='secondary'>{ finishName }</Tag>
        </div>
    </div>
  )
}
