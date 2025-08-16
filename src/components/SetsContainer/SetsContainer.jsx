import Set from '../Set/Set'
import style from './SetsContainer.module.css'

export default function SetsContainer({ setsData }) {
  return (
    <div className={style.sets_container}>
      {
        setsData?.pages?.map(page => (
          page.data.map(set => (
            <Set key={set.id} 
              logo={set.logo}
              name={set.name}
              printedTotal={set.printedTotal}
              releaseDate={set.releaseDate}
              series={set.series}
              symbol={set.symbol}
              total={set.total}
              id={set.id} 
            />
          ))
        ))
      }
    </div>
  )
}
