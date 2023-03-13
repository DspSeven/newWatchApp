import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {FaFirefoxBrowser} from 'react-icons/fa'
import {
  CombineContainer,
  Videos,
  UnorderedList,
  TrendUnorderedList,
  TC,
} from './styledComponents'

import HeaderPage from '../HeaderPage/header'
import FilterGroup from '../FilterGroup/filter'
import TrendingVideos from '../TrendingVideos/trendingVideos'
import FailureScenario from '../FailureScenario/failureApi'

import NxtWatch from '../../context/NxtWatch/nxtWatchContext'

const trendingConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TrendingRoute extends Component {
  state = {
    status: trendingConstants.inProgress,
    trendingVideosData: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({status: trendingConstants.inProgress})
    const trendingVideosApiUrl = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(trendingVideosApiUrl, options)
    const Data = await response.json()
    console.log(Data)
    if (response) {
      const updatedData = Data.videos.map(data => ({
        channel: {
          name: data.channel.name,
          profileImageUrl: data.channel.profile_image_url,
        },
        id: data.id,
        publishedAt: data.published_at,
        thumbnailUrl: data.thumbnail_url,
        title: data.title,
        viewCount: data.view_count,
      }))
      return this.setState({
        status: trendingConstants.success,
        trendingVideosData: updatedData,
      })
    }
    return this.setState({status: trendingConstants.failure})
  }

  renderLoader = () => {
    console.log('')
    return (
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#000000" height="50" width="50" />
      </div>
    )
  }

  // success Api
  successRoute = () => {
    const {trendingVideosData} = this.state
    return (
      <UnorderedList>
        <div>
          <span>
            <FaFirefoxBrowser />
          </span>
          <h1>Trending</h1>
        </div>
        <TrendUnorderedList>
          {trendingVideosData.map(data => (
            <TrendingVideos trendingData={data} key={data.id} />
          ))}
        </TrendUnorderedList>
      </UnorderedList>
    )
  }

  navToTrendingAction = () => {
    this.getTrendingVideos()
  }

  // to be added in futher
  failureRoute = () => {
    console.log('')
    return (
      <>
        <FailureScenario />
        <button type="button" onClick={this.navToTrendingAction}>
          Retry
        </button>
      </>
    )
  }

  startSwitch = () => {
    const {status} = this.state
    switch (status) {
      case trendingConstants.success:
        return this.successRoute()
      case trendingConstants.failure:
        return this.failureRoute()
      case trendingConstants.inProgress:
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
            <TC colorChange={toggleColor} data-testid="trending">
              <HeaderPage />
              <CombineContainer>
                <FilterGroup />
                <Videos>{this.startSwitch()}</Videos>
              </CombineContainer>
            </TC>
          )
        }}
      </NxtWatch.Consumer>
    )
  }
}
export default TrendingRoute
