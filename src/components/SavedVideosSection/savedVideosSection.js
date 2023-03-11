import {SvsContainer, SvsSubContainer, Image} from './styledComponents'

const SavedVideosSection = props => {
  const {savedVideosDetails} = props
  const {id, thumbnailUrl, name, viewCount, newDate} = savedVideosDetails
  return (
    <SvsContainer>
      <Image src={thumbnailUrl} alt={name} />
      <SvsSubContainer>
        <h1>{name}</h1>
        <p>{viewCount}</p>
        <p>{newDate}</p>
      </SvsSubContainer>
    </SvsContainer>
  )
}
export default SavedVideosSection
