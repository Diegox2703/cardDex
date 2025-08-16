import mimiKyu from '../../assets/gifs/mimikyu.webp'
import StatusScreen from "../StatusScreen/StatusScreen";

export default function NoItemFound({
    noItemFoundImg = mimiKyu,
    noItemFoundTitle = 'Nothing here',
    noItemFoundText = 'No results found. Try searching for something else.',
    size = 'normal'
}) {
  return (
    <StatusScreen 
        size={size} 
        statusImage={noItemFoundImg} 
        statusTitle={noItemFoundTitle} 
        statusText={noItemFoundText}
    />
  )
}
