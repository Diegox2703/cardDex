import psyduck from '../../assets/gifs/psyduck-1.webp'
import StatusScreen from '../StatusScreen/StatusScreen'

export default function ErrorScreen({ 
  size = 'normal', 
  errorTitle = 'An error ocurred!',
  errorText = 'Try again or later',
  refetchFn 
}) {
  return (
    <StatusScreen statusImage={psyduck} size={size} refetchFn={refetchFn} statusTitle={errorTitle} statusText={errorText}/>
  )
}
