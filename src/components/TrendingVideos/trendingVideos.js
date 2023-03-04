import {formatDistanceToNow} from 'date-fns'

const TrendingVideos = props => {
  const {trendingData} = props
  const {thumbnailUrl, title, name, viewCount, publishedAt} = trendingData
  const year = new Date(publishedAt).getFullYear()
  const month = new Date(publishedAt).getMonth()
  const date = new Date(publishedAt).getFullYear()
  const newDate = formatDistanceToNow(new Date(year, month, date))
  return (
    <div>
      <img src={thumbnailUrl} alt="url" />
      <div>
        <h1>{title}</h1>
        <p>{name}</p>
        <p>{viewCount} views</p>
        <p>{newDate} ago</p>
      </div>
    </div>
  )
}
export default TrendingVideos
