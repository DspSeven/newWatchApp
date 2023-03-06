import {formatDistanceToNow} from 'date-fns'
import {
  HomeVideoContainer,
  PlayerInfo,
  ThumbnailImage,
  Heading,
} from './styledComponents'

const VideosGroup = props => {
  const {videos} = props
  const {id, publishedAt, thumbnailUrl, title, viewCount, channel} = videos
  const {name, profileImageUrl} = channel
  const month = new Date(publishedAt).getMonth()
  console.log(month)
  const newDate = formatDistanceToNow(new Date(publishedAt))
  console.log(newDate)
  return (
    <HomeVideoContainer>
      <ThumbnailImage src={thumbnailUrl} alt={title} />
      <PlayerInfo>
        <img src={profileImageUrl} alt={name} height={60} width={60} />
        <div>
          <Heading>{title}</Heading>
          <p>{name}</p>
          <div>
            <p>{viewCount} views</p>
          </div>
        </div>
      </PlayerInfo>
    </HomeVideoContainer>
  )
}
export default VideosGroup
