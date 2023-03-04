import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {FaFirefoxBrowser} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {RiPlayListAddLine} from 'react-icons/ri'
import {Link} from 'react-router-dom'
import {
  FilterContainer,
  IconContainer,
  HomeContainer,
  IconHeading,
  ContactContainer,
  IconImageContainer,
  IconImage,
  SpanIcon,
} from './styledComponents'
import NxtWatch from '../../context/NxtWatch/nxtWatchContext'

// import './filter.css'

const optionConstants = {
  home: 'Home',
  trending: 'Trending',
  gaming: 'Gaming',
  savedVideos: 'SavedVideos',
}

class FilterGroup extends Component {
  render() {
    return (
      <NxtWatch.Consumer>
        {value => {
          const {toggleColor, optionType, changeOption} = value
          const navToHome = () => {
            changeOption(optionConstants.home)
          }
          const navToTrending = () => {
            changeOption(optionConstants.trending)
          }
          return (
            <FilterContainer bgColor={toggleColor}>
              <IconContainer>
                <Link to="/">
                  <HomeContainer
                    onClick={navToHome}
                    colorBar={optionConstants.home === optionType}
                  >
                    <SpanIcon colorBar={optionConstants.home === optionType}>
                      <AiFillHome />
                    </SpanIcon>
                    <IconHeading>Home</IconHeading>
                  </HomeContainer>
                </Link>
                <Link to="/trending">
                  <HomeContainer
                    onClick={navToTrending}
                    colorBar={optionConstants.trending === optionType}
                  >
                    <SpanIcon
                      colorBar={optionConstants.trending === optionType}
                    >
                      <FaFirefoxBrowser />
                    </SpanIcon>
                    <IconHeading>Trending</IconHeading>
                  </HomeContainer>
                </Link>
                <HomeContainer colorBar={optionConstants.gaming === optionType}>
                  <SpanIcon colorBar={optionConstants.gaming === optionType}>
                    <SiYoutubegaming />
                  </SpanIcon>
                  <IconHeading>Gaming</IconHeading>
                </HomeContainer>
                <HomeContainer
                  colorBar={optionConstants.savedVideos === optionType}
                >
                  <SpanIcon
                    colorBar={optionConstants.savedVideos === optionType}
                  >
                    <RiPlayListAddLine />
                  </SpanIcon>
                  <IconHeading>Saved Videos</IconHeading>
                </HomeContainer>
              </IconContainer>
              <ContactContainer>
                <IconHeading>Contact Us</IconHeading>
                <IconImageContainer>
                  <IconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <IconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <IconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in"
                  />
                </IconImageContainer>
                <IconHeading>
                  Enjoy! Now to see your <br />
                  channels and <br />
                  recommendations
                </IconHeading>
              </ContactContainer>
            </FilterContainer>
          )
        }}
      </NxtWatch.Consumer>
    )
  }
}
export default FilterGroup
