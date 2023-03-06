import {ListContainer} from './styledComponents'

const GamingVideosSection = props => {
  const {gd} = props
  const {id, thumbnailUrl, title, viewCount} = gd
  return (
    <ListContainer>
      <img src={thumbnailUrl} alt={title} height={350} width={300} />
      <p>{title}</p>
      <p>{viewCount} Watching Worldwide</p>
    </ListContainer>
  )
}
export default GamingVideosSection
