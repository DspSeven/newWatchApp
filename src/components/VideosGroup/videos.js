import {formatDistanceToNow} from 'date-fns'

const VideosGroup = props => {
  const {videos} = props
  const {id, publishedAt, thumbnailUrl, title, viewCount, channel} = videos
  const {name, profileImageUrl} = channel
  const month = new Date(publishedAt).getMonth()
  console.log(month)
  const newDate = formatDistanceToNow(new Date(publishedAt))
  console.log(newDate)
  return (
    <div>
      <img src={thumbnailUrl} alt={title} />
      <div>
        <img src={profileImageUrl} alt={name} />
        <div>
          <h1>{title}</h1>
          <p>{name}</p>
          <div>
            <p>{viewCount} views</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default VideosGroup
