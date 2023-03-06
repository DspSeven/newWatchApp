import {formatDistanceToNow} from 'date-fns'
import {
  TrendList,
  ThumbnailImage,
  TrendingInfo,
  Heading,
} from './styledComponents'

const TrendingVideos = props => {
  const {trendingData} = props
  const {thumbnailUrl, title, name, viewCount, publishedAt} = trendingData
  const year = new Date(publishedAt).getFullYear()
  const month = new Date(publishedAt).getMonth()
  const date = new Date(publishedAt).getFullYear()
  const newDate = formatDistanceToNow(new Date(year, month, date))
  return (
    <TrendList>
      <ThumbnailImage src={thumbnailUrl} alt="url" />
      <TrendingInfo>
        <Heading>{title}</Heading>
        <p>{name}</p>
        <p>{viewCount} views</p>
        <p>{newDate} ago</p>
      </TrendingInfo>
    </TrendList>
  )
}
export default TrendingVideos
