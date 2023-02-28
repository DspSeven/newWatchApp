import {Component} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {BiSearchAlt2} from 'react-icons/bi'
import Cookies from 'js-cookie'
import NxtWatch from '../../context/NxtWatch/nxtWatchContext'
import {
  HomeContainer,
  HomeInfo,
  SpanElement,
  VideoContainer,
  InputContainer,
} from './styledComponents'
import VideosGroup from '../VideosGroup/videos'

const optionConstants = {
  home: 'Home',
  trending: 'Trending',
  gaming: 'Gaming',
  savedVideos: 'SavedVideos',
}

class ProductsGroup extends Component {
  state = {
    hideOrDisplay: true,
    searchValue: '',
    videosData: [],
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const {searchValue} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const homeVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${searchValue}`
    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(homeVideosApiUrl, option)
    const data = await response.json()
    console.log(data)
    if (response) {
      const updatedData = data.videos.map(eachData => ({
        id: eachData.id,
        channel: {
          name: eachData.channel.name,
          profileImageUrl: eachData.channel.profile_image_url,
        },
        publishedAt: eachData.published_at,
        thumbnailUrl: eachData.thumbnail_url,
        title: eachData.title,
        viewCount: eachData.view_count,
      }))
      this.setState({videosData: updatedData})
    }
  }

  closeInfo = () => {
    this.setState(prevState => ({
      hideOrDisplay: !prevState.hideOrDisplay,
    }))
  }

  homeRoute = tc => {
    const {hideOrDisplay, videosData} = this.state
    const lightTheme =
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
    const darkTheme =
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
    const theme = tc ? darkTheme : lightTheme
    return (
      <div>
        {hideOrDisplay && (
          <HomeContainer>
            <HomeInfo>
              <img src={theme} alt="website logo" />
              <h1>
                Buy Nxt WatchPremium prepaid plans with
                <br />
                upi
              </h1>
              <button type="button">GET IT NOW</button>
            </HomeInfo>
            <SpanElement onClick={this.closeInfo}>
              <AiOutlineClose />
            </SpanElement>
          </HomeContainer>
        )}
        <VideoContainer>
          <InputContainer>
            <input type="search" placeholder="Search" />
            <BiSearchAlt2 />
          </InputContainer>
          {videosData.map(video => (
            <VideosGroup key={video.id} videos={video} />
          ))}
        </VideoContainer>
      </div>
    )
  }

  render() {
    return (
      <NxtWatch.Consumer>
        {value => {
          const {optionType, toggleColor} = value
          switch (optionType) {
            case optionConstants.home:
              return this.homeRoute(toggleColor)
            default:
              return null
          }
        }}
      </NxtWatch.Consumer>
    )
  }
}
export default ProductsGroup
