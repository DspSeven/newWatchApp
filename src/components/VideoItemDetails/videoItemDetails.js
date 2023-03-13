import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'

import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {RiPlayListAddFill} from 'react-icons/ri'
import HeaderPage from '../HeaderPage/header'
import FilterGroup from '../FilterGroup/filter'
import RenderLoader from '../RenderLoader/loader'
import FailureScenario from '../FailureScenario/failureApi'

import {
  CombineContainer,
  VideoInfo,
  ViewsAndTimeDuration,
  LikeContainer,
  LDS,
  SpanContainer,
  VideoAdditionalInfo,
  SpanTwo,
  SpanThree,
  LikeContent,
  SpecificContainer,
  Container,
  Heading,
  Paragraph,
} from './styledComponents'
import NxtWatch from '../../context/NxtWatch/nxtWatchContext'

const specificJobConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
  default: 'DEFAULT',
}

class VideoItemDetails extends Component {
  state = {
    videoItemInfo: {},
    channel: {},
    status: specificJobConstants.default,
    likeStatus: false,
    disLikeStatus: false,
    playList: false,
    savedVideos: {},
  }

  componentDidMount() {
    this.getSpecificVideo()
  }

  getSpecificVideo = async () => {
    this.setState({status: specificJobConstants.inProgress})
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
    if (response.ok) {
      const updatedData = {
        description: data.video_details.description,
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
      }
      console.log(updatedData)
      return this.setState({
        videoItemInfo: updatedData,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        status: specificJobConstants.success,
      })
    }
    return this.setState({status: specificJobConstants.failure})
  }

  successApi = saveVideo => {
    const {
      videoItemInfo,
      channel,
      likeStatus,
      disLikeStatus,
      playList,
    } = this.state
    console.log(disLikeStatus)
    const {
      description,
      id,
      publishedAt,
      thumbnailUrl,
      title,
      videoUrl,
      viewCount,
    } = videoItemInfo
    const {name, profileImageUrl, subscriberCount} = channel
    console.log(channel)
    const year = new Date(publishedAt).getFullYear()
    const month = new Date(publishedAt).getMonth()
    const date = new Date(publishedAt).getFullYear()
    const newDate = formatDistanceToNow(new Date(year, month, date))

    // change like color
    const changeLikeStatus = () => {
      this.setState(prevState => ({
        likeStatus: !prevState.likeStatus,
        disLikeStatus: false,
      }))
    }

    const changeDislikeStatus = () => {
      this.setState(prevState => ({
        disLikeStatus: !prevState.disLikeStatus,
        likeStatus: false,
      }))
    }

    const saveVideoInList = () => {
      saveVideo({
        id,
        thumbnailUrl,
        name,
        viewCount,
        newDate,
        publishedAt,
        title,
      })
      /*
      this.setState({savedVideos: {id, thumbnailUrl, name, viewCount, newDate}})
    */
    }

    return (
      <SpecificContainer>
        <div>
          <div>
            <ReactPlayer
              url={videoUrl}
              controls
              width={`${73}vw`}
              height={`${450}px`}
            />
            <h1>{title}</h1>
            <VideoInfo>
              <ViewsAndTimeDuration>
                <p>{viewCount} views</p>
                <p>{newDate} ago</p>
              </ViewsAndTimeDuration>
              <LDS>
                <LikeContainer>
                  <SpanContainer onClick={changeLikeStatus} one={likeStatus}>
                    <BiLike />
                  </SpanContainer>
                  <LikeContent like={likeStatus}>Like</LikeContent>
                </LikeContainer>
                <LikeContainer>
                  <SpanThree onClick={changeDislikeStatus} two={disLikeStatus}>
                    <BiDislike />
                  </SpanThree>
                  <LikeContent like={disLikeStatus}>Dislike</LikeContent>
                </LikeContainer>
                <LikeContainer>
                  <SpanTwo onClick={saveVideoInList} colorChange={playList}>
                    <RiPlayListAddFill />
                  </SpanTwo>
                  <LikeContent like={playList}>Save</LikeContent>
                </LikeContainer>
              </LDS>
            </VideoInfo>
            <hr />
          </div>
          <VideoAdditionalInfo>
            <img src={profileImageUrl} alt={title} height={60} width={60} />
            <Container>
              <Heading>{name}</Heading>
              <Paragraph>{subscriberCount} subscribers</Paragraph>
              <Paragraph>{description}</Paragraph>
            </Container>
          </VideoAdditionalInfo>
        </div>
      </SpecificContainer>
    )
  }

  navToVideoItemDetails = () => {
    this.getSpecificVideo()
  }

  failureApi = () => {
    console.log('')
    return (
      <>
        <FailureScenario />
        <button type="button" onClick={this.navToVideoItemDetails}>
          Retry
        </button>
      </>
    )
  }

  renderLoader = () => {
    console.log('')
    return <RenderLoader />
  }

  startSwitch = saveVideo => {
    const {status} = this.state
    switch (status) {
      case specificJobConstants.success:
        return this.successApi(saveVideo)
      case specificJobConstants.failure:
        return this.failureApi()
      case specificJobConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatch.Consumer>
        {value => {
          const {saveVideo} = value
          return (
            <div>
              <HeaderPage />
              <CombineContainer>
                <FilterGroup />
                {this.startSwitch(saveVideo)}
              </CombineContainer>
            </div>
          )
        }}
      </NxtWatch.Consumer>
    )
  }
}

export default VideoItemDetails
