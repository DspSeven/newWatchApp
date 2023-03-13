import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiOutlineClose} from 'react-icons/ai'
import {BiSearchAlt2} from 'react-icons/bi'
import RenderLoader from '../RenderLoader/loader'
import NxtWatch from '../../context/NxtWatch/nxtWatchContext'
import FailureScenario from '../FailureScenario/failureApi'

import {
  HomeContainer,
  HomeInfo,
  SpanElement,
  VideoContainer,
  InputContainer,
  HomeRouteContainer,
  EmptyCase,
  CombineContainer,
  UnOl,
  HomeUnorderedList,
} from './styledComponents'
import VideosGroup from '../VideosGroup/videos'

import HeaderPage from '../HeaderPage/header'
import FilterGroup from '../FilterGroup/filter'

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
      <HomeRouteContainer homeColor={tc}>
        {hideOrDisplay ? (
          <HomeContainer homeColor={tc}>
            <HomeInfo>
              <img src={theme} alt="website logo" />
              <p>
                Buy Nxt WatchPremium prepaid plans with
                <br />
                upi
              </p>
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
          <HomeUnorderedList>
            {videosData.map(video => (
              <VideosGroup key={video.id} videos={video} />
            ))}
          </HomeUnorderedList>
        </VideoContainer>
      </HomeRouteContainer>
    )
  }

  successfulHomeRoute = tc => {
    const {videosData} = this.state
    const checkLength = videosData.length > 0
    return (
      <UnOl colorChange={tc}>
        {checkLength ? this.renderIfSearchNonZero(tc) : this.emptyCase()}
      </UnOl>
    )
  }

  // to add in futhuer
  failureHomeRoute = () => {
    console.log('')
    return <FailureScenario />
  }

  renderLoader = () => {
    console.log('')
    return <RenderLoader />
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

  startSwitch = toggleColor => {
    const {status} = this.state
    switch (status) {
      case defaultConstants.success:
        return this.successfulHomeRoute(toggleColor)
      case defaultConstants.failure:
        return this.failureHomeRoute()
      case defaultConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatch.Consumer>
        {value => {
          const {toggleColor} = value
          return (
            <div>
              <HeaderPage />
              <CombineContainer>
                <FilterGroup />
                {this.startSwitch(toggleColor)}
              </CombineContainer>
            </div>
          )
        }}
      </NxtWatch.Consumer>
    )
  }
}
export default HomeRoute
