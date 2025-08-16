import StatusScreen from '../StatusScreen/StatusScreen'

export default function LoadingScreen({ 
  size = 'normal', 
  loadingImage, 
  loadingTitle = 'Loading...', 
  loadingText = 'This could take a few minutes',
  loadingModalMode
}) {
  return (
    <StatusScreen 
      size={size} 
      statusImage={loadingImage} 
      statusTitle={loadingTitle} 
      statusText={loadingText}
      modalMode={loadingModalMode}
    />
  )
}
