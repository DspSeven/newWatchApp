import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {FaFirefoxBrowser} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {RiPlayListAddLine} from 'react-icons/ri'
import {
  FilterContainer,
  IconContainer,
  HomeContainer,
  IconHeading,
  ContactContainer,
  IconImageContainer,
  IconImage,
} from './styledComponents'
import NxtWatch from '../../context/NxtWatch/nxtWatchContext'
import './filter.css'

class FilterGroup extends Component {
  render() {
    return (
      <NxtWatch.Consumer>
        {value => {
          const {toggleColor} = value
          return (
            <FilterContainer bgColor={toggleColor}>
              <IconContainer>
                <HomeContainer>
                  <AiFillHome className="icon" />
                  <IconHeading>Home</IconHeading>
                </HomeContainer>
                <HomeContainer>
                  <FaFirefoxBrowser className="icon" />
                  <IconHeading>Trending</IconHeading>
                </HomeContainer>
                <HomeContainer>
                  <SiYoutubegaming className="icon" />
                  <IconHeading>Gaming</IconHeading>
                </HomeContainer>
                <HomeContainer>
                  <RiPlayListAddLine className="icon" />
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
