import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'

import {formatDistanceToNow} from 'date-fns'
import HeaderPage from '../HeaderPage/header'
import FilterGroup from '../FilterGroup/filter'

class VideoItemDetails extends Component {
  state = {
    videoItemInfo: {},
  }

  componentDidMount() {
    this.getSpecificVideo()
  }

  getSpecificVideo = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const videoItemDetailsApiUrl = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(videoItemDetailsApiUrl, options)
    const data = await response.json()
    console.log(data)
    const updatedData = {
      channel: {
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
      },
      description: data.video_details.description,
      id: data.video_details.id,
      publishedAt: data.video_details.published_at,
      thumbnailUrl: data.video_details.thumbnail_url,
      title: data.video_details.title,
      videoUrl: data.video_details.video_url,
      viewCount: data.video_details.view_count,
    }
    console.log(updatedData)
    this.setState({videoItemInfo: updatedData})
  }

  render() {
    const {videoItemInfo} = this.state
    const {
      channel,
      description,
      id,
      publishedAt,
      thumbnailUrl,
      title,
      videoUrl,
      viewCount,
    } = videoItemInfo
    console.log(publishedAt)
    const year = new Date(publishedAt).getFullYear()
    console.log(year)
    const month = new Date(publishedAt).getMonth()
    const date = new Date(publishedAt).getDate()
    const newDate = formatDistanceToNow(new Date(year, month, date))
    return (
      <div>
        <HeaderPage />
        <div>
          <FilterGroup />
          <div>
            <ReactPlayer url={videoUrl} />
            <h1>{title}</h1>
            <div>
              <p>{viewCount} views</p>
              <p>{newDate} ago</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default VideoItemDetails
