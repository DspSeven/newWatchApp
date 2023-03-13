import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import {
  TrendList,
  ThumbnailImage,
  TrendingInfo,
  Heading,
} from './styledComponents'

const TrendingVideos = props => {
  const {trendingData} = props
  const {id, thumbnailUrl, title, name, viewCount, publishedAt} = trendingData
  const year = new Date(publishedAt).getFullYear()
  const month = new Date(publishedAt).getMonth()
  const date = new Date(publishedAt).getDate()
  const newDate = formatDistanceToNow(new Date(year, month, date))
  return (
    <Link to={`/videos/${id}`}>
      <TrendList>
        <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
        <TrendingInfo>
          <Heading>{title}</Heading>
          <p>{name}</p>
          <p>{viewCount} views</p>
          <p>{publishedAt}</p>
          <p>{newDate} ago</p>
        </TrendingInfo>
      </TrendList>
    </Link>
  )
}
export default TrendingVideos
