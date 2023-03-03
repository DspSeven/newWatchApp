import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {AiOutlineClose} from 'react-icons/ai'
import {BiSearchAlt2} from 'react-icons/bi'
import NxtWatch from '../../context/NxtWatch/nxtWatchContext'

import {
  HomeContainer,
  HomeInfo,
  SpanElement,
  VideoContainer,
  InputContainer,
  HomeRouteContainer,
  EmptyCase,
} from './styledComponents'
import VideosGroup from '../VideosGroup/videos'

const defaultConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
  empty: 'Empty',
}

class HomeRoute extends Component {
  state = {
    hideOrDisplay: true,
    searchValue: '',
    videosData: [],
    status: '',
  }

  componentDidMount() {
    this.getVideos()
  }

  failureApi = () => {
    this.setState({status: defaultConstants.failure})
  }

  getVideos = async () => {
    this.setState({status: defaultConstants.inProgress})
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
      return this.setState({
        videosData: updatedData,
        status: defaultConstants.success,
      })
    }
    return this.failureApi()
  }

  closeInfo = () => {
    this.setState(prevState => ({
      hideOrDisplay: !prevState.hideOrDisplay,
    }))
  }

  enterSearchValue = event => {
    this.setState({searchValue: event.target.value})
  }

  renderSearch = () => {
    const {videosData} = this.state
    const checkLength = videosData.length > 0
    console.log(checkLength)
    if (checkLength) {
      return this.getVideos()
    }
    return this.successfulHomeRoute()
  }

  renderIfSearchNonZero = tc => {
    const {hideOrDisplay, videosData, searchValue} = this.state
    const lightTheme =
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
    const darkTheme =
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
    const theme = tc ? darkTheme : lightTheme
    return (
      <>
        <HomeRouteContainer homeColor={tc}>
          {hideOrDisplay ? (
            <HomeContainer homeColor={tc}>
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
          ) : null}
          <VideoContainer>
            <InputContainer>
              <input
                type="search"
                placeholder="Search"
                onChange={this.enterSearchValue}
                value={searchValue}
              />
              <BiSearchAlt2 onClick={this.renderSearch} />
            </InputContainer>
            {videosData.map(video => (
              <VideosGroup key={video.id} videos={video} />
            ))}
          </VideoContainer>
        </HomeRouteContainer>
      </>
    )
  }

  successfulHomeRoute = tc => {
    const {videosData} = this.state
    const checkLength = videosData.length > 0
    return (
      <>{checkLength ? this.renderIfSearchNonZero(tc) : this.emptyCase()}</>
    )
  }

  failureHomeRoute = () => {}

  renderLoader = toggleColor => {
    const renderColor = toggleColor ? '#ffffff' : '#000000'
    return (
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color={renderColor} height="50" width="50" />
      </div>
    )
  }

  // if search not matches
  emptyCase = () => {
    console.log('no-search')
    return (
      <EmptyCase>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
          height={50}
          width={50}
        />
        <h1>No Search results found</h1>
        <p>Try different search words or remove filters</p>
        <button type="button">Retry</button>
      </EmptyCase>
    )
  }

  render() {
    const {status} = this.state
    console.log(status)
    return (
      <NxtWatch.Consumer>
        {value => {
          const {toggleColor} = value
          switch (status) {
            case defaultConstants.success:
              return this.successfulHomeRoute(toggleColor)
            case defaultConstants.failure:
              return this.failureHomeRoute()
            case defaultConstants.inProgress:
              return this.renderLoader(toggleColor)
            default:
              return null
          }
        }}
      </NxtWatch.Consumer>
    )
  }
}
export default HomeRoute
