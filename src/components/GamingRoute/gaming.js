import {Component} from 'react'
import Cookies from 'js-cookie'

import FilterGroup from '../FilterGroup/filter'
import HeaderPage from '../HeaderPage/header'
import GamingVideosSection from '../GamingVideosSection/gamingVideosSection'
import FailureScenario from '../FailureScenario/failureApi'
import RenderLoader from '../RenderLoader/loader'
import {CombineContainer, UnorderedList} from './styledComponents'

import NxtWatch from '../../context/NxtWatch/nxtWatchContext'

const gameConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GamingRoute extends Component {
  state = {
    gamingStatus: gameConstants.inProgress,
    gamingVideosData: [],
  }

  componentDidMount() {
    this.getGamingData()
  }

  getGamingData = async () => {
    const gamingVideosApiUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(gamingVideosApiUrl, options)
    const data = await response.json()
    console.log(data)
    if (response) {
      const updatedData = data.videos.map(gamingData => ({
        id: gamingData.id,
        thumbnailUrl: gamingData.thumbnail_url,
        title: gamingData.title,
        viewCount: gamingData.view_count,
      }))
      return this.setState({
        gamingVideosData: updatedData,
        gamingStatus: gameConstants.success,
      })
    }
    return this.setState({gamingStatus: gameConstants.failure})
  }

  // success api
  successApi = toggleColor => {
    const {gamingVideosData} = this.state
    return (
      <UnorderedList colorChange={toggleColor}>
        {gamingVideosData.map(data => (
          <GamingVideosSection gd={data} key={data.id} />
        ))}
      </UnorderedList>
    )
  }

  failureApi = () => {
    console.log('')
    return <FailureScenario />
  }

  renderLoader = () => {
    console.log('')
    return <RenderLoader />
  }

  startSwitch = toggleColor => {
    const {gamingStatus} = this.state
    switch (gamingStatus) {
      case gameConstants.success:
        return this.successApi(toggleColor)
      case gameConstants.failure:
        return this.failureApi()
      case gameConstants.inProgress:
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
            <div data-testid="gaming">
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
export default GamingRoute
