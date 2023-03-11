import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
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
  const year = new Date(publishedAt).getFullYear()
  const month = new Date(publishedAt).getMonth()
  const date = new Date(publishedAt).getDate()
  console.log(month)
  const newDate = formatDistanceToNow(new Date(year, month, date))
  console.log(newDate)
  return (
    <HomeVideoContainer>
      <Link to={`/videos/${id}`}>
        <ThumbnailImage src={thumbnailUrl} alt={title} />
        <PlayerInfo>
          <img src={profileImageUrl} alt={name} height={60} width={60} />
          <div>
            <Heading>{title}</Heading>
            <p>{name}</p>
            <div>
              <p>{viewCount} views</p>
              <p>{newDate} ago</p>
            </div>
          </div>
        </PlayerInfo>
      </Link>
    </HomeVideoContainer>
  )
}
export default VideosGroup
