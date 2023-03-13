import {Link} from 'react-router-dom'
import {SvsContainer, SvsSubContainer, Image} from './styledComponents'

const SavedVideosSection = props => {
  const {savedVideosDetails} = props
  const {
    id,
    thumbnailUrl,
    name,
    viewCount,
    newDate,
    publishedAt,
    title,
  } = savedVideosDetails
  return (
    <SvsContainer>
      <Link to={`/videos/${id}`}>
        <Image src={thumbnailUrl} alt="video thumbnail" />
      </Link>
      <SvsSubContainer>
        <p>{title}</p>
        <p>{name}</p>
        <p>{viewCount}</p>
        <p>{publishedAt}</p>
        <p>{newDate}</p>
      </SvsSubContainer>
    </SvsContainer>
  )
}
export default SavedVideosSection
